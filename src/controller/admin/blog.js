/**
 * Created by Arthur on 2017/1/6.
 */
'use strict';
const express = require('express');
const router = express.Router();
const validator = require('validator');
const Blog = require('../../proxy/blog');
/**
 * 显示所有博客
 */
router.route('/list')
    .get((req,res,next)=>{
        let { page = 1,query }=req.query;
        let search = {};
        if(query){
            if(query.type && ['public','private','deleted'].indexOf(query.type)>=0){
                switch (query.type){
                    case 'public':
                        search.is_public=true;
                        break;
                    case 'private':
                        search.is_public=false;
                        break;
                    case 'deleted':
                        search.deleted=true;
                        break;
                }
            }
            if(query.keyword){
                search.title=query.keyword;
            }
        }
        Blog.findAllBlogs(page,search,(err,blogs,bcount)=>{
            if(err){
                return next(err);
            }
            var pageCount = Math.ceil(bcount/10);
            res.render('admin/blog/list',{title:'博客列表', blogs : blogs ,pageCount:pageCount});
        });
    })
/**
 * 显示某个用户的所有博客
 */
router.route('/mine/list')
    .get((req,res,next)=>{
        let { user } = req.session;
        let { page=1 , query }=req.query;
        let search = {};
        if(query){
            if(query.type && ['public','private','deleted'].indexOf(query.type)>=0){
                switch (query.type){
                    case 'public':
                        search.is_public=true;
                        break;
                    case 'private':
                        search.is_public=false;
                        break;
                    case 'deleted':
                        search.deleted=true;
                        break;
                }
            }
            if(query.keyword){
                search.title=query.keyword;
            }
        }
        Blog.findByUid(user._id,page,search,(err,blogs,bcount)=>{
            if(err){
                return next(err);
            }
            var pageCount = Math.ceil( bcount/10 );
            res.render('admin/blog/list',{title:'我的博客列表',blogs:blogs,pageCount:pageCount,mine:true});
        });
    })

/**
 * 新增博客
 */
router.route('/add')
    .get((req,res,next)=>{
        res.render('admin/blog/add');
    })
    .post((req,res,next)=>{
        let { blog }=req.body;
        //处理字段
        blog.title=blog.title.trim();
        blog.seo=blog.seo.trim().split(',');
        blog.preview=blog.preview.trim();
        blog.tags=blog.tags.trim().split(',');
        blog.is_public=blog.is_public === 'on'? false:true;
        blog.summary=blog.summary.trim();
        blog.content=blog.content.trim();
        blog.author = blog.author || req.session.user._id;

        var prop_err;
        if(blog.title === ''){
            prop_err='标题不能是空的！';
        }else if(blog.title.length < 5 || blog.title.length > 50){
            prop_err='标题字数必需在5-50之间！';
        }else if(blog.preview === ''){
            prop_err='请选择一张封面图！'
        }else if(blog.tags.length <= 0 || blog.tags.length > 3){
            prop_err='标签个数必需为1-3，且只能用英文逗号连接！'
        }else if(blog.summary === ''){
            prop_err='简介不能是空的！'
        }else if(blog.summary.length < 10 || blog.summary.length > 200){
            prop_err='简介字数必需在10-200之间！'
        }else if(blog.content === ''){
            prop_err='内容不能为空！'
        }

        if(prop_err){
            res.status(422);
            return res.render('admin/blog/add',{ title :'新增博客',error : prop_err });
        }
        Blog.saveBlog(blog,(err)=>{
            if(err){
                return next(err);
            }
            //给管理员发送通知消息
            return res.redirect('/admin/blog/list');
        });
    })
/**
 * 编辑博客
 */
router.route('/edit/:id')
    .get((req,res,next)=>{
        let { id }=req.params;
        Blog.getById(id,(err,blog)=>{
            if(err){
                return next(err);
            }
            res.render('admin/blog/edit',{title:'修改博客',editblog:blog });
        });
    })

router.route('/edit')
    .post((req,res,next)=>{
        let { blog }=req.body;
        //处理字段
        blog.id = blog.id.trim();
        blog.title=blog.title.trim();
        blog.seo=blog.seo.trim().split(',');
        blog.preview=blog.preview.trim();
        blog.tags=blog.tags.trim().split(',');
        blog.is_public=blog.is_public && blog.is_public === 'on'? false:true;
        blog.summary=blog.summary.trim();
        blog.content=blog.content.trim();

        var prop_err;
        if(blog.id === ''){
            prop_err='信息错误！';
        }else if(blog.title === ''){
            prop_err='标题不能是空的！';
        }else if(blog.title.length < 5 || blog.title.length > 50){
            prop_err='标题字数必需在5-50之间！';
        }else if(blog.preview === ''){
            prop_err='请选择一张封面图！'
        }else if(blog.tags.length <= 0 || blog.tags.length > 3){
            prop_err='标签个数必需为1-3，且只能用英文逗号连接！'
        }else if(blog.summary === ''){
            prop_err='简介不能是空的！'
        }else if(blog.summary.length < 10 || blog.summary.length > 200){
            prop_err='简介字数必需在10-200之间！'
        }else if(blog.content === ''){
            prop_err='内容不能为空！'
        }

        if(prop_err){
            res.status(422);
            return res.render('admin/blog/edit',{title:'修改博客', error : prop_err });
        }
        Blog.update(blog,(err,blog)=>{
            if(err){
                return next(err);
            }
            return res.render('admin/blog/edit',{title:'修改博客',editblog:blog });
        })
    })

/**
 * 博客改为公开
 */
router.route('/public/:id')
    .get((req,res,next)=>{
        let { id }=req.params;
        Blog.publicById(id,(err)=>{
            if(err){
                return next(err);
            }
            res.redirect('/admin/blog/list');
        })
    })

/**
 * 博客改为私有
 */
router.route('/private/:id')
    .get((req,res,next)=>{
        let { id }=req.params;
        Blog.privateById(id,(err)=>{
            if(err){
                return next(err);
            }
            res.redirect('/admin/blog/list');
        });
    })

/**
 * 删除博客
 */
router.route('/delete/:id')
    .get((req,res,next)=>{
        let { id }=req.params;
        Blog.deleteById(id,(err)=>{
            if(err){
                return next(err);
            }
            res.redirect('/admin/blog/list');
        });
    })
/**
 * 恢复博客
 */
router.route('/recover/:id')
    .get((req,res,next)=>{
        let { id }=req.params;
        Blog.recoverById(id,(err)=>{
            if(err){
                return next(err);
            }
            res.redirect('/admin/blog/list');
        });
    })
/**
 * 彻底移除博客
 */
router.route('/remove/:id')
    .get((req,res,next)=>{
        Blog.removeById(id,(err)=>{
            if(err){
                return next(err);
            }
            res.redirect('/admin/blog/list');
        });
    })

module.exports = router;