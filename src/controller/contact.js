/**
 * Created by Arthur on 2017/1/5.
 */
'use strict';
const express = require('express');
const router = express.Router();
const configs = require('../../config.default');
const mailer = require('../common/mail');
const User = require('../proxy/user');
const permissions = require('./admin/permissions');

router.route('/')
    .get((req,res,next)=>{
        User.getUserByUsername(configs.owner,(err,user)=>{
            if(err){
                return next(err);
            }
            return res.render('index/contact',{tab:'contact',hoster: user,title:`联系 ${user.username}`});
        });
    })
    .post(permissions.loginRequired,(req,res,next)=>{
        User.getUserByUsername(configs.owner,(err,user)=>{
            if(err){
                return next(err);
            }
            let { mail } = req.body;
            let _mail={};
            _mail['from']=configs.mail.auth.user;
            _mail['to']=user.email;
            _mail['subject']='Arthur Song博客联系';
            _mail['html']=`
            <p>发件人:${mail.from}</p>
            <p>${mail.content}</p>
            `;
            console.log({user,mail:_mail});
            mailer.sendMail(_mail,(err)=>{
                if(err){
                    return res.render('index/contact',{ hoster : user , title : `联系 ${user.username}`,error:'服务器忙，请稍候重试！',mail:_mail});
                }
                return res.render('index/contact',{ hoster : user , title : `联系 ${user.username}`,success:'邮件发送成功!'});
            });
        })
    });

module.exports = router;