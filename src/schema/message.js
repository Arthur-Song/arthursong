/**
 * 消息
 * Created by Arthur on 2017/1/12.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const MessageSchema = new Schema({
    /**
     * 消息类型
     *  1：系统消息 system
     *  2：邮件通知消息 mail
     *  3：回复消息 reply
     *  4: 评论通知 comment
     */
    type:String,
    title:String, //消息标题
    master:{ //消息接收人
        type:ObjectId,
        ref:'User'
    },
    author:{ //消息发送人
        type:ObjectId,
        ref:'User'
    },
    project:{ //项目id
        type:ObjectId,
        ref:'Project'
    },
    blog:{
        type:ObjectId,
        ref:'Blog'
    },
    reply:{
        type:ObjectId,
        ref:'Reply'
    },
    has_read:{
        type:Boolean,
        default:false
    },
    meta:{
        createAt:{
            type:Date,
            default:Date.now()
        },
        lastModified:{
            type:Date,
            default:Date.now()
        }
    }
});
//保存之前
MessageSchema.pre('save',function(next){
    if(this.isNew){
        this.meta.createAt = this.meta.lastModified = Date.now();
    }else{
        this.meta.lastModified=Date.now();
    }
    next();
});
MessageSchema.index({master_id: 1, has_read: -1, 'meta.createAt': -1});

module.exports = MessageSchema;