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
        url:'mongodb://127.0.0.1:27017/###' //mongodb数据库连接
    },
    use_redis_session:false, //是否使用redis缓存session
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
        salt:'arthursong' //加盐
    },
    user:{ //用户默认头像
        avatar_male:'/public/upload/avatar/avatar.png',
        avatar_female:'/public/upload/avatar/avatar-female.png'
    },
    mail:{
        host:'###', //邮件服务器
        port:465, //端口
        secure:true, //使用SSL加密
        auth:{
            user:'### your account ###', //你的站点管理邮箱
            pass:'### pass ###' //密钥
        }
    },
    github:{

    },
    SALT_WORK_FACTOR:10, //加盐算法生成密钥时间（毫秒）,
    SESSION_SECRET:'### your session secret ###', //你的session secret
};

module.exports=configs;