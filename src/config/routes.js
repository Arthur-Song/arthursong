/**
 * Created by Arthur on 2017/1/5.
 */
'use strict';
const express = require('express');
const admin = express.Router();
const configs = require('../../config.default');
//普通用户
const index = require('../controller/index');
const blog = require('../controller/blog');
const project = require('../controller/project');
const contact = require('../controller/contact');
const upload = require('../controller/upload');
const reply = require('../controller/reply');
const view = require('../controller/admin/view');
//管理员
const adminIndex = require('../controller/admin/index');
const adminBlogs = require('../controller/admin/blog');
const adminUsers = require('../controller/admin/user');
const adminAdmins = require('../controller/admin/admin');
const adminProjects = require('../controller/admin/project');
const adminMessages = require('../controller/admin/message');
const adminEvents = require('../controller/admin/event');
const permissions = require('../controller/admin/permissions');
const unReadsMiddleware = require('../middleware/unreads');

module.exports = function(app,mongoose,logger){
    /**
     * 验证用户是否登录
     */
    app.use(function(req , res , next){
        var _user=req.session.user;
        if(_user){
            app.locals.user=_user;
        }
        next();
    });
    /**
     * 配置路由
     */
    //普通用户
    app.use('/blog',blog);
    app.use('/project',project);
    app.use('/contact',contact);
    app.use('/upload',upload);
    app.use('/reply',permissions.loginRequired,reply);
    app.use('/view',view);
    app.use(index);
    //管理员
    app.use('/admin',admin);
    admin.use(adminIndex);
    admin.use('/blog',permissions.loginRequired,unReadsMiddleware.unReads,adminBlogs);
    admin.use('/user',permissions.loginRequired,unReadsMiddleware.unReads,permissions.adminRequired,adminUsers);
    admin.use('/admin',permissions.loginRequired,unReadsMiddleware.unReads,permissions.adminRequired,permissions.superAdminRequired,adminAdmins);
    admin.use('/project',permissions.loginRequired,unReadsMiddleware.unReads,adminProjects);
    admin.use('/message',permissions.loginRequired,unReadsMiddleware.unReads,adminMessages);
    admin.use('/event',permissions.loginRequired,unReadsMiddleware.unReads,adminEvents);
    /**
     * 调试模式开启数据库记录日志
     */
    if(configs.debug){
        mongoose.set('debug',true); //设置数据库为debug模式
        app.use(logger(':method:url:status')); //设置app记录日志格式
        app.locals.pretty=false;
        app.use((err,req,res,next)=>{
            res.status(err.status || 500);
            res.render('error',{
                title:err.status+' 页面',
                message:err.message,
                error:err
            });
        });
    }
    /**
     * 捕获404
     */
    app.use(function(req, res, next) {
        var err = new Error('找不到页面');
        err.status = 404;
        next(err);
    });
    /**
     * 服务器异常
     */
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            title:err.status+' 页面',
            message: '哎哟，服务器开小差了，请稍后重试',
            error: err
        });
    });
};