/**
 * Created by Arthur on 2017/1/12.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const EventSchema = new Schema({
    master_id:{
        type:ObjectId
    },
    title:String,
    /**
     * 级别
     * 0 : 普通
     * 1 ： 紧急
     * 2 ： 重要
     * 3 ：紧急且重要
     */
    level:{
        type:Number,
        default:0
    },
    start:{
        type:Date,
        default:Date.now()
    },
    end:{
        type:Date,
        default:Date.now()
    },
    has_finish:{
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

EventSchema.pre('save',function(next){
    if(this.isNew){
        this.meta.createAt = this.meta.lastModified = Date.now();
    }else{
        this.meta.lastModified=Date.now();
    }
    if(!this.level){
        this.level = 0;
    }
    next();
});
/**
 * 获取时间颜色
 */
EventSchema.virtual('color').get(function(){
    switch (this.level){
        case 0:
            return '#4db14d';
        case 1:
            return '#23abf0';
        case 2:
            return '#F37B1D';
        case 3:
            return '#dd514c';
    }
});
EventSchema.virtual('color').set(function(){
    switch (this.level){
        case 0:
            this.color='#4db14d';
        case 1:
            this.color='#23abf0';
        case 2:
            this.color='#F37B1D';
        case 3:
            this.color='#dd514c';
    }
});

EventSchema.virtual('id').get(function(){
    return this._id;
});

EventSchema.index({master_id:1});
EventSchema.index({'meta.createAt':-1});

module.exports = EventSchema;