/**
 * Created by Arthur on 2017/1/20.
 */
'use strict';
const express = require('express');
const router = express.Router();
const Blog = require('../../proxy/blog');
const Project = require('../../proxy/project');

router.route('/blog/:id')
    .get((req,res,next)=>{
        let { id }=req.params;
        Blog.getById(id,(err,blog)=>{
            if(err){
                return next(err);
            }
            return res.redirect(`/${blog.author.username}/blog/${blog._id}`);
        })
    })

router.route('/project/:id')
    .get((req,res,next)=>{
        let { id }=req.params;
        Project.getById(id,(err,project)=>{
            if(err){
                return next(err);
            }
            return res.redirect(`/${project.author.username}/project/${project._id}`);
        })
    })

module.exports = router;