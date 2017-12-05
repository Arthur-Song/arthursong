/**
 * Created by Arthur on 2017/1/5.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const BlogSchema = new Schema({
    title:String,
    content:String,
    //预览图
    preview:{
        type:String
    },
    //是否公开
    is_public:{
        type:Boolean,
        default:true
    },
    //简介
    summary:String,
    tags:Array,
    author:{
        type:ObjectId,
        ref:'User'
    },
    reply_count:{
        type:Number,
        default:0
    },
    visit_count:{
        type:Number,
        default:0
    },
    last_reply:{
        type:ObjectId,
        ref:'Reply'
    },
    last_reply_at:{
        type:Date,
        default:Date.now()
    },
    seo:[String], //seo关键字
    tags:Array, //标签
    content_is_html:Boolean,
    deleted:Boolean,
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

BlogSchema.pre('save',function(next){
    if(this.isNew){
        this.meta.createAt = this.meta.lastModified = Date.now();
    }else{
        this.meta.lastModified=Date.now();
    }
    next();
});

BlogSchema.index({'meta.createAt':-1});
BlogSchema.index({last_reply_at:-1});
BlogSchema.index({author_id:1,'meta.createAt':-1});

module.exports = BlogSchema;