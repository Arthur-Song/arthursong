/**
 * Created by Arthur on 2017/1/5.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ProjectSchema = new Schema({
    title:String,
    content:String,
    //github 地址
    github:{
        type:String
    },
    //预览图
    preview:{
        type:String
    },
    //是否公开
    is_public:{
        type:Boolean,
        default:true
    },
    //是否已经完成
    has_done:{
        type:Boolean,
        default:false
    },
    //简介
    summary:String,
    tags:Array,
    author:{
        type:ObjectId,
        ref:'User'
    },
    visit_count:{
        type:Number,
        default:0
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

ProjectSchema.pre('save',function(next){
    if(this.isNew){
        this.meta.createAt = this.meta.lastModified = Date.now();
    }else{
        this.meta.lastModified=Date.now();
    }
    next();
})

ProjectSchema.index({'meta.createAt':-1});
ProjectSchema.index({last_reply_at:-1});
ProjectSchema.index({title:1});
ProjectSchema.index({author_id:1,'meta.createAt':-1});

module.exports = ProjectSchema;