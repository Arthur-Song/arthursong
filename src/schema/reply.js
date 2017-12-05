/**
 * Created by Arthur on 2017/1/5.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ReplySchema = new Schema({
    content:String,
    blog:{
        type:ObjectId,
        ref:'Blog'
    },
    project:{
        type:ObjectId,
        ref:'Project'
    },
    author:{
        type:ObjectId,
        ref:'User'
    },
    reply_fa:{
        type:ObjectId
    },
    content_is_html:Boolean,
    ups:[Schema.Types.ObjectId],
    deleted:{
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

ReplySchema.pre('save',function(next){
    if(this.isNew){
        this.meta.createAt = this.meta.lastModified = Date.now();
    }else{
        this.meta.lastModified=Date.now();
    }
    next();
})

ReplySchema.index({'blog_id':1});
ReplySchema.index({'author_id':1});

module.exports = ReplySchema;