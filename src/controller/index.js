/**
 * Created by Arthur on 2017/1/5.
 */
'use strict';
const express = require('express');
const router = express.Router();
const validator = require('validator');
const tools = require('../common/tools');
const eventproxy = require('eventproxy');
const User = require('../proxy/user');
const mailer = require('../common/mail');
const utility = require('utility');
const configs = require('../../config.default');
const logger = require('../common/logger');
const Blog = require('../proxy/blog');
const reserved = configs.reserved;
const md = require('../common/md');
const Reply = require('../proxy/reply');
const permissions = require('./admin/permissions');

router.route('/search')
    .get((req,res,next)=>{
        res.render('index/search',{ title:'Arthur Song' });
    })

router.route('/')
    .get((req,res,next)=>{
        User.getUserByUsername(configs.owner,(err,user)=>{
            logger.info(user);
            if(err){
                return (next);
            }
            return res.render('index/index',{  hoster : user , projects:user.projects || [] , title : `${user.username} 的首页`});
        });
    })

router.route('/register')
    .get((req,res,next)=>{
        return res.redirect('/register/1');
    })

/**
 * 分步骤注册
 */
router.route('/register/:step')
    .get((req,res,next)=>{
        let { step }=req.params;
        if(typeof(step) === 'string'){
            step=parseInt(step);
        }
        var { id }=req.query;
        switch (step){
            case 1:
                if(configs.allowRegister){
                    if(id){
                        User.getById(id,(err,user)=>{
                            if(err){
                                return next(err);
                            }
                            return res.render('index/register-step1',{registerUser:user , title:'注册 | 基本信息'});
                        })
                    }else{
                        return res.render('index/register-step1',{title:'注册 | 基本信息'});
                    }
                }else{
                    return next();
                }
                break;
            case 2:
                if(id){
                    User.getById(id,(err,user)=>{
                        if(err){
                            return next(err);
                        }
                        return res.render('index/register-step2',{registerUser:user, title:'注册 | 激活邮箱'});
                    })
                }else {
                    return next();
                }
                break;
            case 3:
                if(id){
                    User.getById(id,(err,user)=>{
                        if(err){
                            return next(err);
                        }
                        return res.render('index/register-step3',{registerUser:user, title:'注册 | 完善信息'});
                    })
                }else{
                    return next();
                }
                break;
            default:
                return next();
                break;
        }
    })
    .post((req,res,next)=>{
        let { step }=req.params;
        if(!step){
            return res.json({ status : 0 , error:'参数错误！' });
        }
        if(typeof(step) === 'string'){
            step=parseInt(step);
        }
        switch (step){
            case 1:
                    if(configs.allowRegister){
                        var { id , username , email , password , confirmPassword }=req.body;

                        logger.info('[POST]registry-1==>req.body:',req.body);
                        //验证完整性
                        if([username,password,confirmPassword,email].some((item)=>{
                                return item === '';
                            })){
                            return res.render('index/register-step1',{ error:'信息不完整，请检查！',registerUser:req.body, title:'注册 | 基本信息' });
                        }
                        //用户名和关键字冲突
                        if( configs.reserved.some((item)=>{
                                return username === item;
                            })){
                            res.status(422);
                            return res.render('index/register-step1',{ error:'用户名不能使用，请更换！',registerUser:req.body, title:'注册 | 基本信息' });
                        }
                        //验证用户名长度
                        if(username.trim().length < 6 || username.trim().length > 20){
                            res.status(422);
                            return res.render('index/register-step1',{ error:'用户名长度必须为6-20之间！',registerUser:req.body, title:'注册 | 基本信息' });
                        }
                        if(!tools.validateName(username.trim())){
                            res.status(422);
                            return res.render('index/register-step1',{ error:'用户名不合法！',registerUser:req.body, title:'注册 | 基本信息' });
                        }
                        if(!tools.validatePassword(password.trim())){
                            res.status(422);
                            return res.render('index/register-step1',{ error:'密码长度为8-16为，且，数字、字母、字符至少包含两种！' ,registerUser:req.body, title:'注册 | 基本信息'});
                        }
                        if(!validator.isEmail(email)){
                            res.status(422);
                            return res.render('index/register-step1',{ error:'邮箱不合法！',registerUser:req.body, title:'注册 | 基本信息' });
                        }
                        if(password !== confirmPassword){
                            res.status(422);
                            return res.render('index/register-step1',{ error:'两次输入的密码不一致！',registerUser:req.body, title:'注册 | 基本信息' });
                        }

                        User.findUsersByQuery({$or:[{username:username.trim()},{email:email.trim()}]},{},(err,users)=>{
                            if(err){
                                return next(err);
                            };
                            if(users.length >= 1 && users.length < 2){
                                if(id && users[0]._id === id){
                                    //加密password生成hash
                                    tools.generatePassHash(
                                        password.trim(),
                                        function(err,passHash){
                                            if(err) {
                                                return res.render('index/register-step1',{ error:'服务器忙，请稍候重试！', title:'注册 | 基本信息', registerUser:users[0] });
                                            }
                                            User.getById(users[0]._id,(err,_user)=>{
                                                if(err){
                                                    return res.render('index/register-step1',{ error:'服务器忙，请稍候重试！', title:'注册 | 基本信息',registerUser:users[0] });
                                                }
                                                _user.username = username;
                                                _user.password = passHash;
                                                _user.email = email;

                                                _user.save(function(err){
                                                    if(err){
                                                        return res.render('index/register-step1',{ error:'服务器忙，请稍候重试！', title:'注册 | 基本信息',registerUser:_user });
                                                    }
                                                    //发送激活邮件
                                                    mailer.sendActiveMail(_user.email,utility.md5( _user.email + passHash + configs.SESSION_SECRET ) , _user.username.trim(),(err)=>{
                                                        if(err){
                                                            _user.remove();
                                                            return res.render('index/register-step2',{ registerUser:users[0] , error:'邮件发送失败！' });
                                                        }
                                                        return res.render('index/register-step2',{ registerUser:users[0] , title:'注册 | 基本信息'});
                                                    });
                                                });
                                            });
                                        }
                                    );
                                }
                                return res.render('index/register-step1',{ error:'邮箱或用户名已被使用,请更换!',registerUser:users[0] , title:'注册 | 基本信息'});
                            }
                            //没注册
                            if(users.length === 0){
                                let user={};
                                user.username = username;
                                user.password = password;
                                user.email = email;
                                user.ip = req.ip;
                                //加密password生成hash
                                tools.generatePassHash(
                                    user.password.trim(),
                                    function(err,passHash){
                                        if(err) {
                                            return next(err);
                                        }
                                        user.password = passHash;
                                        User.saveUser(user,(err,_user)=>{
                                            if(err){
                                                return next(err);
                                            }
                                            //发送激活邮件
                                            mailer.sendActiveMail(_user.email,utility.md5( _user.email + passHash + configs.SESSION_SECRET ) , _user.username.trim(),(err)=>{
                                                if(err){
                                                    logger.error('[POST]registry-1==>发送激活邮件失败:',err);
                                                    _user.remove((err)=>{
                                                        if(err){
                                                            return res.redirect('/register/1?id='+_user._id);
                                                        }
                                                        return res.render('index/register-step1',{ error:'服务器忙，请稍候重试！', title:'注册 | 基本信息' });
                                                    });
                                                }
                                                logger.info('[POST]registry-1==>发送激活邮件成功:',_user);
                                                return res.redirect('/register/2?id='+_user._id);
                                            });
                                        });
                                    }
                                );
                            }

                        });
                    }else{
                        return next();
                    }
                break;
            case 2:
                    var { id }=req.body;
                    if(!id){
                        return next(new Error('[NO IDENTIFIER ERROR]:no field id !'))
                    }
                    User.getById(id,(err,user)=>{
                        if(err){
                            return next(err);
                        }
                        return res.render('index/register-step3',{registerUser:user});
                    })
                break;
            case 3:
                    var { id , avatar , gender , remark }=req.body;
                    if(avatar === ''){
                        return res.render('index/register-step3',{error:'请选择一张头像！',id:id});
                    }
                    User.getById(id,(err,user)=>{
                        if(err){
                            return next(err);
                        }
                        user.avatar = avatar;
                        user.gender = typeof(gender) === 'string'? parseInt(gender):gender;
                        user.remark = remark;
                        user.save((err)=>{
                            if(err){
                                return next(err);
                            }
                            return res.redirect('/admin/login');
                        });
                    })
                break;
        }
    })
/**
 * 重发激活邮件
 */
router.get('/resendActive/:id',(req,res,next)=>{
    let { id } =req.params;
    User.getById(id,(err,user)=>{
        if(err) return next(err);
        if(user){
            //发送激活邮件
            mailer.sendActiveMail(user.email,utility.md5( user.email + user.password + configs.SESSION_SECRET ) , user.username.trim() ,(err)=>{
                if(err){
                    return res.render('index/register-step2',{ error:'激活邮件发送失败！',registerUser:user});
                }
                return res.render('index/register-step2',{ success:'激活邮件发送成功！',registerUser:user});
            });
        }
    })
});

/**
 * 激活账户
 */
router.route('/active_account')
    .get((req,res,next)=>{
        let { key , name }=req.query;
        User.getUserByUsername(name,(err,user)=>{
            if(err) return next(err);
            if(!user){
                return res.render('index/register-step2',{error:'ACTIVE_ACCOUNT_ERROR:没有这个用户：'+name.trim()})
            }
            let password = user.password;
            if(utility.md5(user.email + password + configs.SESSION_SECRET ) !== key){
                return res.render('index/register-step2',{error:'信息有误，帐号无法被激活！'});
            }
            if(user.active){
                return res.render('index/register-step2',{error:'帐号已是激活状态！'});
            }
            user.active=true;
            user.save((err)=>{
                if(err) return next(err);
                return res.render('index/register-step2',{registerUser:user});
            });
        })
    })

router.route('/:username')
    .get((req,res,next)=>{
        let { username } = req.params;
        //如果为保留字
        if( reserved.some((item)=>{
            return item === username;
        }) ){
            return next();
        }
        User.getUserByUsername(username,(err,user)=>{
            if(err){
                return next(err);
            }
            if(user){
                return res.render('index/index',{ hoster : user  , projects:user.projects, title : `${user.username} 的首页` });
            }else{
                return next();
            }
        });
    });

router.route('/:username/blog/list')
    .get((req,res,next)=>{
        let { username } = req.params;
        let { p=0 }=req.query;
        //如果为保留字
        if( reserved.some((item)=>{
                return item === username;
            }) ){
            return next();
        }
        User.getUserByUsername(username,(err,user)=>{
            if(err){
                return next(err);
            }
            console.log(user);
            if(user){
                console.log(user.blogs.length == 0);
                if(user.blogs.length == 0){
                    return res.render('index/blog',{ tab:'blog', hoster : user  , blogs:[], title : `${user.username} 的博客` });
                }
                let page={};
                if(p >=0 && p < user.blogs.length){
                    page.totalPage=user.blogs.length || 0;
                    page.currentPage = typeof(p) === 'string'? parseInt(p) : p;
                    let blog = user.blogs[p];
                    blog.content = md.render(blog.content);

                    Reply.getRepliesByBlogId(blog.id,(err,replies)=>{
                        if(err){
                            return next(err);
                        }
                        return res.render('index/blog',{tab:'blog', hoster : user , blog : blog , page : page, blogs:user.blogs, replies:replies, title : `${user.username} 的博客` });
                    });
                }else{
                    return next(new Error('NO SUCH BLOG'));
                }
            }else{
                return next();
            }
        });
    })

router.route('/:username/blog/:id')
    .get((req,res,next)=>{
        let { username , id } = req.params;
        //如果为保留字
        if( reserved.some((item)=>{
                return item === username;
            }) ){
            return next();
        }
        User.getUserByUsername(username,(err,user)=>{
            if(err){
                return (next);
            }
            if(user){
                if(user.blogs.length == 0){
                    return res.render('index/blog',{tab:'blog', hoster : user  , blogs:[], title : `${user.username}的博客` });
                }
                let blogs = user.blogs,page={},blog={};
                for(let i= 0,len=blogs.length;i<len;i++){
                    if(blogs[i]._id == id){
                        blog=blogs[i];
                        page.currentPage = i;
                        break;
                    }
                }
                if(blog._id){
                    page.totalPage = blogs.length;
                    blog.content = md.render(blog.content);

                    Reply.getRepliesByBlogId(blog.id,(err,replies)=>{
                        if(err){
                            return next(err);
                        }
                        return res.render('index/blog',{tab:'blog', hoster : user ,blog:blog, blogs:blogs,replies:replies, page:page, title : `${user.username} | ${blog.title}`});
                    });
                }else{
                    return next(new Error('NO SUCH BLOG'));
                }
            }else{
                return next();
            }
        });
    })

router.route('/:username/project/list')
    .get((req,res,next)=>{
        let { username , id } = req.params;
        let { p=0 }=req.query;
        //如果为保留字
        if( reserved.some((item)=>{
                return item === username;
            }) ){
            return next();
        }
        User.getUserByUsername(username,(err,user)=>{
            if(err){
                return (next);
            }
            if(user){
                if(user.projects.length === 0){
                    return res.render('index/project',{tab:'project', hoster : user  , projects:[], title : `${user.username} 的项目` });
                }
                let page={};
                if(p >=0 && p < user.projects.length){
                    page.totalPage=user.projects.length || 0;
                    page.currentPage = typeof(p) === 'string'? parseInt(p) : p;
                    let project = user.projects[p];
                    project.content = md.render(project.content);
                    return res.render('index/project',{tab:'project', hoster : user , project : project , page : page, projects:user.projects, title : `${user.username} | ${project.title}` });
                }else{
                    return next(new Error('NO SUCH PROJECT'));
                }
            }else{
                return next();
            }
        });
    })

router.route('/:username/project/:id')
    .get((req,res,next)=>{
        let { username , id } = req.params;
        //如果为保留字
        if( reserved.some((item)=>{
                return item === username;
            }) ){
            return next();
        }
        User.getUserByUsername(username,(err,user)=>{
            if(err){
                return (next);
            }
            if(user){
                if(user.projects.length === 0){
                    return res.render('index/project',{tab:'project', hoster : user  , projects:[], title : `${user.username} 的项目` });
                }
                let projects = user.projects,page={},project={};
                for(let i= 0,len=projects.length;i<len;i++){
                    if(projects[i]._id == id){
                        project=projects[i];
                        page.currentPage = i;
                        break;
                    }
                }
                if(project._id){
                    page.totalPage = projects.length;
                    project.content = md.render(project.content);
                    return res.render('index/project',{tab:'project', hoster : user ,project:project, projects:projects, page:page, title : `${user.username} | ${project.title}`});
                }else{
                    return next(new Error('NO SUCH PROJECT'));
                }
            }else{
                return next();
            }
        });
    })

router.route('/:username/contact')
    .get((req,res,next)=>{
        let { username } = req.params;
        //如果为保留字
        if( reserved.some((item)=>{
                return item === username;
            }) ){
            return next();
        }
        User.getUserByUsername(username,(err,user)=>{
            if(err){
                return (next);
            }
            if(user){
                res.render('index/contact',{tab:'contact', hoster : user , title : `联系 ${user.username}`});
            }else{
                return next();
            }
        });
    })
    .post(permissions.loginRequired,(req,res,next)=>{
        let { username }=req.params;
        User.getUserByUsername(username,(err,user)=>{
            if(err){
                return next(err);
            }
            if(user){
                let { mail } = req.body;
                let _mail={};
                _mail['from']=configs.mail.auth.user;
                _mail['to']=user.email;
                _mail['subject']='Arthur Song博客联系';
                _mail['html']=`
                <p>发件人:${mail.from}</p>
                <p>${mail.content}</p>
                `;
                mailer.sendMail(_mail,(err)=>{
                    if(err){
                        return res.render('index/contact',{tab:'contact', hoster : user , title : `联系 ${user.username}`,error:'服务器忙，请稍候重试！',mail:_mail});
                    }
                    return res.render('index/contact',{tab:'contact', hoster : user , title : `联系 ${user.username}`,success:'邮件发送成功!'});
                });
            }else{
                return next();
            }
        });
    });

module.exports = router;