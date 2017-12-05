/**
 * Created by Arthur on 2017/1/5.
 */
const path = require('path');

var configs={
    debug:false, //调试模式
    allowRegister:true, //允许注册
    get mini_assets() { return !this.debug; }, // 是否启用静态文件的合并压缩，详见视图中的Loader
    owner:'Arthur', //拥有者
    name:'arthursong', //项目名称
    site:{
        name:'Arthur Song',
        author:'Arthur Song',
        icon:'/public/favicon.png',
        description:'',
        host:'localhost',
        port:3000
    },
    get site_static_host(){
        return `http://${this.site.host}:${this.site.port}`;
    },
    mongodb:{
        url:'mongodb://127.0.0.1:27017/test'
    },
    use_redis_session:false, //使用redis缓存session
    redis:{
        port:6379,
        host:'localhost'
    },
    elastic:{
        url:'http://localhost:9200'
    },
    //保留字
    reserved:['admin','contact','active_account','resendActive','register','public','project','blog','view','reply'],
    upload:{
        maxSize:1024*1024*1, //文件大小限制
        dir:path.join(__dirname,'public/upload/'), //上传文件夹
        url:'/public/upload',
        salt:'arthursong'
    },
    user:{
        avatar_male:'/public/upload/avatar/avatar.png',
        avatar_female:'/public/upload/avatar/avatar-female.png'
    },
    mail:{
        host:'smtp.qq.com',
        port:465,
        secure:true, //使用SSL加密
        auth:{
            user:'670604495@qq.com',
            pass:'xbnpqmymuyuvbcif'
        }
    },
    github:{

    },
    SALT_WORK_FACTOR:10, //加盐算法生成密钥时间（毫秒）,
    SESSION_SECRET:'arthursong'
}

module.exports=configs;