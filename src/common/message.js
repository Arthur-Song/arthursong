/**
 * 消息通知
 * Created by Arthur on 2017/1/18.
 */
const Message = require('../model/message');
const User = require('../model/user');
const logger = require('./logger');

/**
 * 给所有管理员发送系统提示消息
 * @param type
 * @param content
 */
exports.sendMsgToAdmins=function(title,blogId,projectId){
    let type='system'; //系统提示
    User.find({role:{$gte:50}})
        .exec((err,users)=>{
            if(err){
                return logger.error('系统提醒消息发送失败！',err,title);
            }
            for(let i= 0,len=users.length;i<len;i++){
                var msg= new Message();
                msg.type=type;
                msg.master=users[i]._id;
                if(blogId){
                    msg.blog=blogId;
                }
                if(projectId){
                    msg.project=projectId;
                }
                msg.has_read=false;
                msg.title=title;
                msg.save((err)=>{
                    if(err){
                        logger.error('系统提醒消息发送失败！',err,title);
                    }
                    logger.info('系统提醒消息发送成功！',title);
                })
            }
        })
};
/**
 * 给所有超级管理员发送系统提示消息
 * @param type
 * @param content
 */
exports.sendMsgToSuperAdmins=function(title){
    let type='system'; //系统提示
    User.find({role:{$gte:100}})
        .exec((err,users)=>{
            if(err){
                return logger.error('系统提醒消息发送失败！',err,title);
            }
            for(let i= 0,len=users.length;i<len;i++){
                var msg= new Message();
                msg.type=type;
                msg.master=users[i]._id;
                if(blogId){
                    msg.blog=blogId;
                }
                if(projectId){
                    msg.project=projectId;
                }
                msg.has_read=false;
                msg.title=title;
                msg.save((err)=>{
                    if(err){
                        logger.error('系统提醒消息发送失败！',err,title);
                    }
                    logger.info('系统提醒消息发送成功！',title);
                })
            }
        })
};
/**
 * 给某个用户发送回复通知消息
 * @param uid 用户id
 * @param type
 * @param content
 */
exports.sendReplyMsgToUser=function(uid,type,title){

};
/**
 * 回复消息
 * @param fromUid
 * @param toUid
 * @param blogId
 * @param projectId
 * @param 标题
 */
exports.replyMsg=function(type,fromUid,toUid,blogId,projectId,title){
    var msg= new Message();
    msg.type=type;
    msg.master=toUid;
    msg.author=fromUid;
    if(blogId){
        msg.blog=blogId;
    }
    if(projectId){
        msg.project=projectId;
    }
    msg.has_read=false;
    msg.title=title;
    msg.save((err)=>{
        if(err){
            logger.error('系统提醒消息发送失败！',err,title);
        }
        logger.info('系统提醒消息发送成功！',title);
    })
};
