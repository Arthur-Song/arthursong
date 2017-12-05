/**
 * Created by Arthur on 2017/1/5.
 */
'use strict';
const express = require('express');
const router = express.Router();
const User = require('../proxy/user');
const md = require('../common/md');
const configs = require('../../config.default');

router.route('/list')
    .get((req,res,next)=>{
        let { p=0 }=req.query;
        User.getUserByUsername(configs.owner,(err,user)=>{
            if(err){
                return next(err);
            }
            if(user.projects.length === 0){
                return res.render('index/project',{tab:'project', hoster : user  , projects:[], title : `${user.username} 的项目` });
            }
            let page={};
            if(p >=0 && p < user.projects.length){
                page.totalPage=user.projects.length || 0;
                page.currentPage = typeof(p) === 'string'? parseInt(p) : p;
                let project = user.projects[p];
                project.content = md.render(project.content);
                console.log(page);
                return res.render('index/project',{tab:'project', hoster : user , project : project , page : page, projects:user.projects, title : `${user.username} | ${project.title}` });
            }else{
                return next(new Error('NO SUCH PROJECT'));
            }
        });
    })

router.route('/:id')
    .get((req,res,next)=>{
        let { id } = req.params;
        User.getUserByUsername(configs.owner,(err,user)=>{
            if(err){
                return next(err);
            }
            if(user.projects.length === 0){
                return res.render('index/project',{ tab:'project',hoster : user  , projects:[], title : `${user.username} 的项目` });
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
        });
    })

module.exports = router;