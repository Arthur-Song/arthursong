/**
 * Created by Arthur on 2017/1/22.
 */
const express = require('express');
const router = express.Router();
const Reply = require('../proxy/reply');
const Blog = require('../proxy/blog');
const MessageUtils = require('../common/message');

router.route('/add')
    .post((req,res,next)=>{
        let { reply } = req.body;
        if(reply.blog === ''){
            return next();
        }else if(reply.content === ''){
            return next(new Error('回复或留言内容不能为空！'));
        }
        reply.author=reply.author ? reply.author : req.session.user._id;

        Reply.saveReply(reply,(err)=>{
            if(err){
                return next(err);
            }
            if(reply.reply_fa){
                //给用户发送回复通知消息
                MessageUtils.replyMsg('reply',reply.author,reply.reply_master_id,reply.blog,null,'您有一条回复消息');
            }else{
                //给用户发送博客评论通知消息
                MessageUtils.replyMsg('comment',reply.author,reply.reply_master_id,reply.blog,null,'您的博客被评论了');
            }
            res.redirect('/view/blog/'+reply.blog);
        });
    })

router.route('/edit/:id')
    .get((req,res,next)=>{
        let { id }= req.params;
        Reply.getById(id,(err,reply)=>{
            if(err){
                return next(err);
            }
            res.render('index/editReply',{title:'编辑评论',editreply:reply,blog_id:reply.blog._id});
        });
    })
router.route('/edit')
    .post((req,res,next)=>{
        let { reply , blog_id }= req.body;
        Reply.update(reply,(err)=>{
            if(err){
                return next(err);
            }
            res.redirect('/view/blog/'+blog_id);
        });
    })

router.route('/remove/:bid/:id')
    .get((req,res,next)=>{
        let { bid ,id }= req.params;
        Reply.removeById(id,(err)=>{
            if(err){
                return next(err);
            }
            res.redirect('/view/blog/'+bid);
        });
    })

router.route('/up/:rid')
    .get((req,res,next)=>{
        let { rid }=req.params;
        Reply.toggleThumbUp(rid,req.session.user._id,(err,reply,add)=>{
            if(err){
                return res.json({status:0,error:err});
            }
            return res.json({status:1,reply:reply,add});
        })
    })

module.exports = router;