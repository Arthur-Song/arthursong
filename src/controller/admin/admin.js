/**
 * Created by Arthur on 2017/1/17.
 */
const express = require('express');
const router = express.Router();
const User = require('../../proxy/user');
const permissions = require('./permissions');
const tools = require('../../common/tools');
const mailer = require('../../common/mail');
const utility = require('utility');
const eventproxy = require('eventproxy');
const validator = require('validator');
const configs = require('../../../config.default');

router.route('/list')
    .get((req,res,next)=>{
        let { page=1 , query }=req.query;
        let search={};
        if(query){
            if(query.adminType && (query.adminType === '0' || query.adminType === 0)){
                search.role=50;
            }else if(query.adminType && (query.adminType === '1' || query.adminType === 1)){
                search.role=100;
            }
            search.keyword=query.keyword;
        }
        User.listAdmins(page,search,(err,users,ucount)=>{
            if(err){
                return next(err);
            }else{
                //每页10个
                var pageCount = Math.ceil(ucount/10);
                return res.render('admin/admin/list',{title:'管理员列表',users:users,pageCount:pageCount});
            }
        });
    })

router.get('/add',(req,res,next)=>{
    return res.render('admin/admin/add',{title:'添加管理员'});
});


router.post('/add',(req,res,next)=>{
    let { user , adminType}=req.body;
    let ep = new eventproxy();
    ep.fail(next);
    //注册事件，属性不正确事件
    ep.on('prop_error',(msg)=>{
        res.status(422);
        res.render('admin/admin/add',{ error : msg , edituser : user , title:'添加管理员'});
    });
    let { username , password , confirmPassword , gender , email }=user;
    console.log({username , password , confirmPassword , gender , email , adminType});
    //验证完整性
    if([username,password,confirmPassword,gender,email].some((item)=>{
            return item === '';
        })){
        return ep.emit('prop_error','信息不完整，请检查！');
    }
    //验证用户名长度
    if(username.trim().length < 5 || username.trim().length > 20){
        return ep.emit('prop_error','用户名长度必须为5-20之间！');
    }
    if(!tools.validateName(username.trim())){
        return ep.emit('prop_error','用户名不合法！');
    }
    if(!tools.validatePassword(password.trim())){
        return ep.emit('prop_error','密码长度为8-16为，且，数字、字母、字符至少包含两种！');
    }
    if(!validator.isEmail(email)){
        return ep.emit('prop_error','邮箱不合法！');
    }
    if(password !== confirmPassword){
        return ep.emit('prop_error','两次输入的密码不一致！');
    }

    User.findUsersByQuery({$or:[{username:username.trim()},{email:email.trim()}]},{},(err,users)=>{
        if(err) return next(err);
        if(users.length > 0){
            return ep.emit('prop_error','用户名或邮箱被使用！');
        }
        user.ip = req.ip;
        if(adminType){
            adminType=typeof(adminType) === 'string'? parseInt(adminType) : adminType;
            if(adminType === 1){
                user.role=100;
            }else{
                user.role=50;
            }
        }
        //加密password生成hash
        tools.generatePassHash(
            user.password.trim(),
            ep.done(function(passHash){
                user.password = passHash;
                User.saveUser(user,(err,_user)=>{
                    if(err){
                        return next(err);
                    }
                    //发送激活邮件
                    mailer.sendActiveMail(_user.email,utility.md5( _user.email + passHash + configs.SESSION_SECRET ) , _user.username.trim(),(err)=>{
                        if(err){
                            var msg;
                            if(_user.role >=100){
                                msg=`超级管理员：${_user.username} 添加成功，激活邮件发送失败！`;
                            }else{
                                msg=`管理员：${_user.username} 添加成功，激活邮件发送失败！`
                            }
                            return res.render('admin/user/edit',{ title:'编辑用户信息',edituser:_user,error:msg});
                        }
                        return res.redirect('/admin/admin/list');
                    });
                });
            })
        );
    });
});
/**
 * 重发激活邮件
 */
router.get('/resendActive/:id',(req,res,next)=>{
    let { id } =req.params;
    User.getById(id,(err,user)=>{
        if(err) return next(err);
        if(user){
            //发送激活邮件
            mailer.sendActiveMail(user.email,utility.md5( user.email + user.password + configs.SESSION_SECRET ) , user.username.trim() );
            res.redirect('/admin/admin/list');
        }
    })
});
/**
 * 注销用户
 */
router.get('/delete/:id',(req,res,next)=>{
    let { id } =req.params;
    User.getById(id,(err,user)=>{
        if(err) return next(err);
        if(user){
            user.deleted = true;
            user.save((err)=>{
                if(err) return next(err);
                res.redirect('/admin/admin/list');
            });
        }
    })
});
/**
 * 重置密码 重置为:用户名与密码相同
 */
router.get('/resetPass/:id',(req,res,next)=>{
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
                    res.redirect('/admin/admin/list');
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
            return res.render('admin/admin/edit',{title:'编辑用户信息',edituser:user})
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
        res.render('admin/admin/edit',{ title:'编辑用户信息' , error : msg , edituser:user});
    });
    let { username , password ,avatar , confirmPassword , gender , email , adminType }=user;
    //验证完整性
    if([username,password,confirmPassword,gender,email].some((item)=>{
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
    if(!tools.validatePassword(password.trim())){
        return ep.emit('prop_error','密码长度为8-16为，且，数字、字母、字符至少包含两种！');
    }
    if(!validator.isEmail(email)){
        return ep.emit('prop_error','邮箱不合法！');
    }
    if(password !== confirmPassword){
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
                                    return res.render('admin/admin/edit',{ title:'编辑用户信息',edituser:users[0],error:'服务器忙，请稍后尝试！'});
                                }
                                res.render('admin/admin/edit',{title:'编辑用户信息',edituser:users[0]});
                            });
                        }else{
                            res.render('admin/admin/edit',{title:'编辑用户信息',edituser:users[0]});
                        }
                    });
                })
            );
        }
    });
});

module.exports = router;