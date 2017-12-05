/**
 * Created by Arthur on 2017/1/5.
 */
'use strict';
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const configs = require('../../config.default');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const UserSchema = new Schema({
    username:{
        type:String,
        unique:true
    },
    password:String,
    ip:String,
    avatar:{
        type:String
    },
    gender:{
        type:Number,
        default:0
    },
    email:{
        type:String
        ,unique:true
    },
    remark:{
        type:String,
        default:''
    },
    blogs:[{
        type:ObjectId,
        ref:'Blog'
    }],
    projects:[{
        type:ObjectId,
        ref:'Project'
    }],
    role:{
        type:Number,
        default:0
    },
    accessToken:String,
    active:{
        type:Boolean,
        default:false
    },
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
/**
 * 添加用户
 *  1.生成meta信息
 *  2.加密密码
 */
UserSchema.pre('save',function(next){
    let user = this;
    if(this.isNew){
        this.meta.createAt = this.meta.lastModified = Date.now();
    }else{
        this.meta.lastModified=Date.now();
    }
    if(this.gender && typeof(this.gender) === 'string'){
        this.gender=parseInt(this.gender.trim());
    }
    next();
});

UserSchema.virtual('sex').get(function(){
    return this.gender == 1 ? '男':'女';
});

UserSchema.virtual('status').get(function(){
    if(this.deleted){
        return '已注销';
    }else if(this.active){
        return '已激活';
    }else if(!this.active){
        return '待激活';
    }else{
        return '正常';
    }
});

UserSchema.virtual('loginMail').get(function(){
    var mail = this.email;
    return 'http://mail.'+mail.split('@')[1];
});

/**
 * 用户对象方法
 * @type {{comparePassword: (function(*=, *))}}
 */
UserSchema.methods={
    //校验密码是否正确
    comparePassword(_password,cb){
        bcrypt.compare(_password,this.password,(err,isCorrect)=>{
            if(err) return cb(err);
            return cb(null,isCorrect);
        });
    }
};

/**
 * 创建索引
 */
UserSchema.index({'username':1},{unique:true});
UserSchema.index({'email':1},{unique:true});
UserSchema.index({'username':1,email:1});
UserSchema.index({'role':-1});
UserSchema.index({'accessToken':1});

module.exports = UserSchema;


