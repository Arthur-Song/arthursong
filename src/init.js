/**
 * 初始化应用
 * Created by arthursong on 17/1/8.
 */
const mongoose = require('mongoose');
const User = require('./proxy/user');
const configs = require('../config');

//连接数据库
mongoose.connect(configs.mongodb.url);
//超级管理员
const superadmin = {
    username:configs.owner,
    password:'$2a$10$o/2z1/b0U1HijoEcLyU4CuBKJysizHf5/Ttm6rF6nfKOcBGHtzlJu', //初始默认密码：520arthursong
    avatar:'/public/upload/avatar/avatar.png',
    gender:1,
    email:'### your email here ###', //你的站点非管理邮箱
    blogs:[],
    projects:[],
    active:true,
    deleted:false,
    remark:'Talk is cheap , show me the code !',
    role:100,
    meta:{
        createAt:Date.now(),
        lastModified:Date.now()
    }
};

User.saveUser(superadmin,(err)=>{
    if(err) throw err;
    console.log('初始化完成！');
    process.exit(0); //退出
});

