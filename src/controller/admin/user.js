/**
 * Created by Arthur on 2017/1/6.
 */
const express = require('express');
const router = express.Router();
const eventproxy = require('eventproxy');
const validator = require('validator');
const utility = require('utility');
const User = require('../../proxy/user');
const tools = require('../../common/tools');
const mailer = require('../../common/mail');
const configs = require('../../../config.default');
const permissions = require('./permissions');

router.route('/list')
    .get((req,res,next)=>{
        let { page =1 , query }=req.query;
        let search={};
        if(query){
            if(query.gender && (query.gender === '1' || query.gender === 1)){
                search.gender=1;
            }else if(query.gender && (query.gender === '0' || query.gender === 0)){
                search.gender=0;
            }
            search.keyword=query.keyword;
        }
        User.listUsers(page,search,(err,users,ucount)=>{
            if(err){
                return next(err);
            }else{
                var pageCount = Math.ceil(ucount/10);
                return res.render('admin/user/list',{title:'用户列表',users:users});
            }
        });
    })

/**
 * 重发激活邮件
 */
router.get('/resendActive/:id',permissions.loginRequired,permissions.adminRequired,(req,res,next)=>{
    let { id } =req.params;
    User.getById(id,(err,user)=>{
        if(err) return next(err);
        if(user){
            //发送激活邮件
            mailer.sendActiveMail(user.email,utility.md5( user.email + user.password + configs.SESSION_SECRET ) , user.username.trim() );
            res.redirect('/admin/user/list');
        }
    })
});
/**
 * 注销用户
 */
router.get('/delete/:id',permissions.loginRequired,permissions.superAdminRequired,(req,res,next)=>{
    let { id } =req.params;
    User.getById(id,(err,user)=>{
        if(err) return next(err);
        if(user){
            user.deleted = true;
            user.save((err)=>{
                if(err) return next(err);
                res.redirect('/admin/user/list');
            });
        }
    })
});
/**
 * 重置密码 重置为:用户名与密码相同
 */
router.get('/resetPass/:id',permissions.loginRequired,permissions.superAdminRequired,(req,res,next)=>{
    let { id } =req.params;
    User.getById(id,(err,user)=>{
        if(err) return next(err);
        if(user){
            tools.generatePassHash(user.username,(err,hash)=>{
                if(err) return next(err);
                user.password=hash;
                user.save((err)=>{
                    if(err) return next(err);
                    mailer.sendResetPassInfoMail(user.email,user.username);
                    res.redirect('/admin/user/list');
                });
            });
        }
    })
});

/**
 * 编辑用户
 */
router.get('/edit/:id',(req,res,next)=>{
    let { id } =req.params;
    User.getById(id,(err,user)=>{
        if(err) return next(err);
        if(user){
            return res.render('admin/user/edit',{title:'编辑用户信息',edituser:user})
        }
    })
});
router.post('/edit',(req,res,next)=>{
    let { user }=req.body;
    console.log(user);
    let ep = new eventproxy();
    ep.fail(next);
    //注册事件，属性不正确事件
    ep.on('prop_error',(msg)=>{
        res.status(422);
        res.render('admin/user/edit',{ title:'编辑用户信息' , error : msg , edituser:user});
    });
    let { username , password ,avatar , confirmPassword , gender , email , adminType }=user;
    //验证完整性
    if([gender,email,adminType].some((item)=>{
            return item === '';
        })){
        return ep.emit('prop_error','信息不完整，请检查！');
    }
    //验证用户名长度
    if(username.trim().length < 6 || username.trim().length > 20){
        return ep.emit('prop_error','用户名长度必须为6-20之间！');
    }
    if(!tools.validateName(username.trim())){
        return ep.emit('prop_error','用户名不合法！');
    }
    if(password && !tools.validatePassword(password.trim())){
        return ep.emit('prop_error','密码长度为8-16为，且，数字、字母、字符至少包含两种！');
    }
    if(!validator.isEmail(email)){
        return ep.emit('prop_error','邮箱不合法！');
    }
    if(password && confirmPassword && password !== confirmPassword){
        return ep.emit('prop_error','两次输入的密码不一致！');
    }
    User.findUsersByQuery({$or:[{username:username.trim()},{email:email.trim()}]},{},(err,users)=>{
        if(err) return next(err);
        if(!users || users.length === 0){
            return ep.emit('prop_error','信息错误');
        }
        if(users.length > 1){
            return ep.emit('prop_error','邮箱已被使用,请更换!');
        }else{
            if(password){
                //加密password生成hash
                tools.generatePassHash(
                    user.password.trim(),
                    ep.done(function(passHash){
                        let changeEmail = false;
                        if(users[0].email !== email){
                            users[0].active=false;
                            users[0].email = email;
                            changeEmail=true;
                        }
                        users[0].avatar = avatar;
                        users[0].gender=gender;
                        users[0].password=passHash;
                        users[0].remark=user.remark;
                        if(adminType){
                            adminType=typeof(adminType) === 'string'? parseInt(adminType) : adminType;
                            if(adminType === 2){
                                users[0].role=100;
                            }else if(adminType === 1){
                                users[0].role=50;
                            }else{
                                users[0].role=10;
                            }
                        }
                        users[0].save((err)=>{
                            if(err){
                                return next(err);
                            }
                            //邮箱已修改
                            if(changeEmail){
                                //发送激活邮件
                                mailer.sendActiveMail(users[0].email,utility.md5( users[0].email + passHash + configs.SESSION_SECRET ) , users[0].username.trim() , (err)=>{
                                    if(err){
                                        return res.render('admin/user/edit',{ title:'编辑用户信息',edituser:users[0],error:'服务器忙，请稍后尝试！'});
                                    }
                                    delete req.app.locals.user;
                                    req.app.locals.user=users[0];
                                    res.render('admin/user/edit',{title:'编辑用户信息',edituser:users[0]});
                                });
                            }else{
                                delete req.app.locals.user;
                                req.app.locals.user=users[0];
                                res.render('admin/user/edit',{title:'编辑用户信息',edituser:users[0]});
                            }
                        });
                    })
                );
            }else {
                let changeEmail = false;
                if(users[0].email !== email){
                    users[0].active=false;
                    users[0].email = email;
                    changeEmail=true;
                }
                users[0].avatar = avatar;
                users[0].gender=gender;
                users[0].remark=user.remark;
                if(adminType){
                    adminType=typeof(adminType) === 'string'? parseInt(adminType) : adminType;
                    if(adminType === 2){
                        users[0].role=100;
                    }else if(adminType === 1){
                        users[0].role=50;
                    }else{
                        users[0].role=10;
                    }
                }
                users[0].save((err)=>{
                    if(err){
                        return next(err);
                    }
                    //邮箱已修改
                    if(changeEmail){
                        //发送激活邮件
                        mailer.sendActiveMail(users[0].email,utility.md5( users[0].email + users[0]['password'] + configs.SESSION_SECRET ) , users[0].username.trim() , (err)=>{
                            if(err){
                                return res.render('admin/user/edit',{ title:'编辑用户信息',edituser:users[0],error:'服务器忙，请稍后尝试！'});
                            }
                            delete req.app.locals.user;
                            req.app.locals.user=users[0];
                            // res.render('admin/user/edit',{title:'编辑用户信息',edituser:users[0]});
                            res.redirect('/admin/user/edit/'+users[0]['_id'])
                        });
                    }else{
                        delete req.app.locals.user;
                        req.app.locals.user=users[0];
                        // res.render('admin/user/edit/5a210f3da4dbda04786077de',{title:'编辑用户信息',edituser:users[0]});
                        res.redirect('/admin/user/edit/'+users[0]['_id'])
                    }
                });
            }

        }
    });
});

module.exports = router;