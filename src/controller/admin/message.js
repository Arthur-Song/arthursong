/**
 * Created by Arthur on 2017/1/11.
 */
'use strict';
const express = require('express');
const router = express.Router();
const Message = require('../../proxy/message');

router.route('/mine/list')
    .get((req,res,next)=>{
        let { user }=req.session;
        let { page=1 }=req.query;
        Message.findByUid(page,user._id,(err,messages,mcount)=>{
            if(err){
                return next(err);
            }
            var pageCount = Math.ceil(mcount/20);
            return res.render('admin/message/list',{title:'我的消息中心',messages:messages,pageCount:pageCount});
        })
    })

router.route('/read/:id')
    .get((req,res,next)=>{
        let { id }=req.params;
        console.log({id});
        Message.readById(id,(err)=>{
            if(err){
                return next(err);
            }
            return res.redirect('/admin/message/mine/list');
        });
    })

router.route('/remove/:id')
    .get((req,res,next)=>{
        let { id }=req.params;
        console.log({id})
        Message.removeById(id,(err)=>{
            if(err){
                return next(err);
            }
            return res.redirect('/admin/message/mine/list');
        });
    })

module.exports = router;