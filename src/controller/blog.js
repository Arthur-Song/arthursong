/**
 * Created by Arthur on 2017/1/5.
 */
'use strict';
const express = require('express');
const router = express.Router();
const configs = require('../../config.default');
const md = require('../common/md');
const User = require('../proxy/user');
const Reply = require('../proxy/reply');

router.route('/list')
    .get((req,res,next)=>{
        let { p=0 }=req.query;
        User.getUserByUsername(configs.owner,(err,user)=>{
            if(err){
                return next(err);
            }
            if(user.blogs.length === 0){
                return res.render('index/blog',{tab:'blog', hoster : user  , blogs:[], title : `${user.username} 的博客` });
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
                    return res.render('index/blog',{tab:'blog', hoster : user ,blog:blog, blogs:user.blogs,replies:replies, page:page, title : `${user.username} | ${blog.title}`});
                });
            }else{
                return next(new Error('NO SUCH BLOG'));
            }
        });
    })

router.route('/:id')
    .get((req,res,next)=>{
        let { id } = req.params;
        User.getUserByUsername(configs.owner,(err,user)=> {
            if (err) {
                return (next);
            }
            if (user.blogs.length === 0) {
                return res.render('index/blog', {tab:'blog',hoster: user, blogs: [], title: `${user.username} 的项目`});
            }
            let blogs = user.blogs, page = {}, blog = {};
            for (let i = 0, len = blogs.length; i < len; i++) {
                if (blogs[i]._id == id) {
                    blog = blogs[i];
                    page.currentPage = i;
                    break;
                }
            }
            if (blog._id) {
                page.totalPage = blogs.length;
                blog.content = md.render(blog.content);

                Reply.getRepliesByBlogId(blog.id,(err,replies)=>{
                    if(err){
                        return next(err);
                    }
                    return res.render('index/blog',{tab:'blog', hoster : user ,blog:blog, blogs:blogs,replies:replies, page:page, title : `${user.username} | ${blog.title}`});
                });
            } else {
                return next(new Error('NO SUCH BLOG'));
            }
        });
    })


module.exports = router;