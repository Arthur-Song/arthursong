/**
 * 项目管理
 * Created by Arthur on 2017/1/6.
 */
'use strict';
const express = require('express');
const router = express.Router();
const Project = require('../../proxy/project');

/**
 * 显示所项目
 */
router.route('/list')
    .get((req,res,next)=>{
        let { page = 1,query }=req.query;
        let search={};
        if(query){
            if(['front','design','background','mobile'].indexOf(query.tag) >= 0){
                search.tag = query.tag;
            }
            search.keyword = query.keyword;
        }
        Project.findAllProjects(page,search,(err,projects,pcount)=>{
            if(err){
                return next(err);
            }
            var pageCount = Math.ceil(pcount/12);
            res.render('admin/project/list',{title:'项目列表',projects:projects,pageCount:pageCount});
        });
    })
/**
 * 指定用户的所有项目
 */
router.route('/mine/list')
    .get((req,res,next)=>{
        let { user }=req.session;
        let { page = 1,query }=req.query;
        let search={};
        if(query){
            if(['front','design','background','mobile'].indexOf(query.tag) >= 0){
                search.tag = query.tag;
            }
            if(query.keyword){
                search.keyword = query.keyword;
            }
        }
        Project.findByUid(user._id,page,search,(err,projects,pcount)=>{
            if(err){
                return next(err);
            }
            var pageCount=Math.ceil(pcount/12);
            res.render('admin/project/list',{title:'我的项目列表',projects:projects , mine:true , pageCount:pageCount});
        });
    })
/**
 * 新增项目
 */
router.route('/add')
    .get((req,res,next)=>{
        res.render('admin/project/add',{title:'新增项目'});
    })
    .post((req,res,next)=>{
        let { project }=req.body;
        //处理字段
        project.title=project.title.trim();
        project.github = project.github || '';
        project.seo=project.seo.trim().split(',');
        project.preview=project.preview.trim();
        project.tags=project.tags;
        project.has_done=project.has_done === 'on'? false:true;
        project.is_public=project.is_public === 'on'? false:true;
        project.summary=project.summary.trim();
        project.content=project.content.trim();
        project.author = project.author || req.session.user._id;

        var prop_err;
        if(project.title === ''){
            prop_err='标题不能是空的！';
        }else if(project.title.length < 5 || project.title.length > 30){
            prop_err='标题字数必需在5-30之间！';
        }else if(project.preview === ''){
            prop_err='请选择一张封面图！'
        }else if(project.tags.length <= 0 || project.tags.length > 3){
            prop_err='标签个数必需为1-3，且只能用英文逗号连接！'
        }else if(project.summary === ''){
            prop_err='简介不能是空的！'
        }else if(project.summary.length < 10 || project.summary.length > 200){
            prop_err='简介字数必需在10-200之间！'
        }else if(project.content === ''){
            prop_err='内容不能为空！'
        }

        if(prop_err){
            res.status(422);
            return res.render('admin/project/add',{title:'新增项目', error : prop_err });
        }
        Project.saveProject(project,(err)=>{
            if(err){
                return next(err);
            }
            //给管理员发送通知消息
            return res.redirect('/admin/project/list');
        });
    })
/**
 * 修改项目
 */
router.route('/edit/:id')
    .get((req,res,next)=>{
        let { id }=req.params;
        Project.getById(id,(err,project)=>{
            if(err){
                return next(err);
            }
            res.render('admin/project/edit',{title:'修改项目',editproject:project });
        });
    })
router.route('/edit')
    .post((req,res,next)=>{
        let { project }=req.body;
        console.log(req.body);
        //处理字段
        project.id = project.id;
        project.title=project.title.trim();
        project.github = project.github || '';
        project.seo=project.seo.trim().split(',');
        project.preview=project.preview.trim();
        project.tags=project.tags;
        project.has_done=project.has_done === 'on'? true:false;
        project.is_public=project.is_public === 'on'? false:true;
        project.summary=project.summary.trim();
        project.content=project.content.trim();

        var prop_err;
        if(project.id === ''){
            prop_err='信息不完整！';
        }else if(project.title === ''){
            prop_err='标题不能是空的！';
        }else if(project.title.length < 5 || project.title.length > 30){
            prop_err='标题字数必需在5-30之间！';
        }else if(project.preview === ''){
            prop_err='请选择一张封面图！'
        }else if(project.tags.length <= 0 || project.tags.length > 3){
            prop_err='标签个数必需为1-3，且只能用英文逗号连接！'
        }else if(project.summary === ''){
            prop_err='简介不能是空的！'
        }else if(project.summary.length < 10 || project.summary.length > 200){
            prop_err='简介字数必需在10-200之间！'
        }else if(project.content === ''){
            prop_err='内容不能为空！'
        }
        console.log(JSON.stringify(project));

        if(prop_err){
            res.status(422);
            return res.render('admin/project/edit',{ error : prop_err });
        }
        Project.update(project,(err,project)=>{
            if(err){
                return next(err);
            }
            return res.redirect('/admin/project/edit/'+project._id);
        });
    })

/**
 * 将项目设为公开
 */
router.route('/public/:id')
    .get((req,res,next)=>{
        let { id }=req.params;
        Project.publicById(id,(err)=>{
            if(err){
                return next(err);
            }
            res.redirect('/admin/project/list');
        });
    })
/**
 * 将项目设为私有
 */
router.route('/private/:id')
    .get((req,res,next)=>{
        let { id }=req.params;
        Project.privateById(id,(err)=>{
            if(err){
                return next(err);
            }
            res.redirect('/admin/project/list');
        })
    })
/**
 * 删除项目
 */
router.route('/delete/:id')
    .get((req,res,next)=>{
        let { id }= req.params;
        Project.deleteById(id,(err)=>{
            if(err){
                return next(err);
            }
            res.redirect('/admin/project/list');
        });
    })
/**
 * 恢复项目
 */
router.route('/recover/:id')
    .get((req,res,next)=>{
        let { id }= req.params;
        Project.recoverById(id,(err)=>{
            if(err){
                return next(err);
            }
            res.redirect('/admin/project/list');
        });
    })

/**
 * 彻底移除项目
 */
router.route('/remove/:id')
    .get((req,res,next)=>{
        let { id }= req.params;
        Project.removeById(id,(err)=>{
            if(err){
                return next(err);
            }
            res.redirect('/admin/project/list');
        });
    })

module.exports = router;