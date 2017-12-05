/**
 * Created by Arthur on 2017/1/6.
 */
'use strict';
const express = require('express');
const router = express.Router();
const utility = require('utility');
const User = require('../../proxy/user');
const Event = require('../../proxy/event');
const configs = require('../../../config.default');
const permissions = require('./permissions');
const reserved = configs.reserved;
const Index = require('../../proxy/index');
const os = require('os-utils');
const unreadsMiddleware = require('../../middleware/unreads');

router.route('/')
    .get(permissions.loginRequired,unreadsMiddleware.unReads,permissions.adminRequired,(req,res,next)=>{
        Index.statisticAll((err,statistic)=>{
            if(err){
                return next(err);
            }
            Index.latestBlogs((err,blogs)=>{
                if(err){
                    return next(err);
                }
                Index.latestProjects((err,projects)=>{
                    res.render('admin/index',{title:'Arthur Song | 控制台',statistic:statistic,blogs:blogs,projects:projects});
                });
            })
        });
    })

router.get('/calendar/:uid',permissions.loginRequired,unreadsMiddleware.unReads,(req,res,next)=>{
    let { uid }=req.params;
    if(!uid){
        return next(new Error('[EVENT NONE UID ERROR]:无此用户！'));
    }
    Event.findAllByUid(uid,(err,events)=>{
        if(err){
            return next(err);
        }
        return res.render('admin/calendar',{title:'日历',events:events});
    });
})
router.post('/calendar/add',permissions.loginRequired,(req,res,next)=>{
    let { uid , event }=req.body;
    event.master_id = uid;
    Event.saveEvent(event,(err,_event)=>{
        if(err){
            return res.json({status:0});
        }
        return res.json({status:1,event:_event}); //1：成功，0：失败
    });
})
router.post('/calendar/edit',permissions.loginRequired,(req,res,next)=>{
    let { event , level }=req.body;
    event.level = typeof(level) === 'string'? parseInt(level):level;
    event.start = new Date(event.start);
    event.end = new Date(event.end);
    console.log(event);
    Event.update(event,(err)=>{
        if(err){
            return next(err);
        }
        return res.redirect('/admin/calendar/'+req.session.user._id);
    });
})
router.get('/calendar/delete/:id',permissions.loginRequired,(req,res,next)=>{
    let { id }=req.params;
    if(!id){
        return next(err);
    }
    Event.removeById(id,(err)=>{
        if(err){
            return next(err);
        }
        return res.redirect('/admin/calendar/'+req.session.user._id);
    });
})
/**
 * 管理员登录
 */
router.route('/login')
    .get((req,res,next)=>{
        res.render('admin/login',{title:'登录'});
    })
    .post((req,res,next)=>{
        let { user }=req.body;
        //用户名和邮件都可以做登录名，邮件忽略大小写
        User.getUserByUsernameOrEmail(user.username,(err,_user)=>{
            if(err) return next(err);
            if(!_user){
                return res.render('admin/login',{title:'登录',error:'用户或邮箱不存在！'});
            }else{
                //管理员账户还未激活
                if(!_user.active){
                    return res.render('admin/login',{title:'登录',error:`用户还未激活，请先登录邮箱(${_user.email})激活账户！`});
                }
                //管理员为删除状态
                if(_user.deleted){
                    return res.render('admin/login',{title:'登录',error:`用户已被注销，请联系管理员(ArthurDev@163.com)`});
                }
                //匹配密码是否正确
                _user.comparePassword(user.password,function(err,isMatched){
                    if(err) return next(err);
                    if(isMatched){
                        delete req.session.user;
                        req.session.user=_user;
                        return res.redirect('/admin');
                    }else{
                        return res.render('admin/login',{title:'登录',error:'用户名或密码错误！'});
                    }
                });
            }
        });
    });

/**
 * 用户退出登录
 */
router.get("/logout",(req,res,next)=>{
    req.session.destroy();
    delete req.app.locals.user;
    delete req.app.locals.unreads;
    res.redirect("/");
});
/**
 *
 */
router.get('/process',permissions.loginRequired,permissions.adminRequired,(req,res,next)=>{
    os.cpuUsage((cpu)=>{
        var process={
            cpu:(cpu*100).toFixed(2),
            mem:((1 -os.freememPercentage() )*100).toFixed(2)
        }
        res.json(process);
    })
});

module.exports = router;