/**
 * Created by Arthur on 2017/1/5.
 */
const configs = require('./config');
const path = require('path');
const express = require('express');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const logger = require('morgan');
const mongoose = require('mongoose');
const moment = require('moment');
const _ = require('lodash');
const MongoStore = require('connect-mongo')(session);
const RedisStore = require('connect-redis')(session);
const busboy = require('connect-busboy');
const Lodaer = require('loader');
const LoaderConnect = require('loader-connect');
const md = require('./src/common/md');

const app = express();
//连接mongodb数据库
mongoose.connect(configs.mongodb.url,{
    server:{ poolSize : 10 }
});
mongoose.Promise = require('bluebird');
// assets
var assets = {};
if (configs.mini_assets) {
    try {
        assets = require('./assets.json');
    } catch (e) {
        throw e;
    }
}

app.set('views',path.join(__dirname,'./src/views')); //设置template目录
app.set('view engine','jade'); //使用jade模版引擎
// app.set('view engine','pug'); //使用pug模板引擎

if(configs.debug){
    app.use(logger('dev')); //开发模式下，控制台记录日志
}
app.use(compression()); //gzip压缩传输数据
app.use(favicon(path.join(__dirname,'./public/favicon.png'))); //设置favicon图标
app.use(bodyParser.urlencoded({ extended: true , limit: '1mb'})); //上传文件大小限制
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/public',express.static(path.join(__dirname,'./public'))); //设置静态资源目录

if(configs.use_redis_session){
    //使用redis缓存session
    app.use(session({
        secret: configs.SESSION_SECRET,
        store: new RedisStore({
            port: configs.redis.port,
            host: configs.redis.host,
        }),
        resave: false,
        saveUninitialized: false,
    }));
}else{
    //缓存session到mongodb
    app.use(session({
       secret:configs.SESSION_SECRET,
       //将session存入mongodb中
       store:new MongoStore({
           url:configs.mongodb.url,
           collection:'sessions', //存入数据库的集合名
           autoRemove: 'interval',
           autoRemoveInterval: 30 //间隔时间(分)
       }),
       saveUninitialized: false, //当session保存数据后再存入数据库
       resave: false, //如果session未发生改变则不更新
    }));
}

//设置application
_.extend(app.locals,{
    site:configs.site,
    moment:moment,
    configs:configs,
    _:_,
    Loader:Lodaer,
    assets:assets,
    md:md
});

//上传
app.use(busboy({
    limits: {
        fileSize: configs.upload.maxSize
    }
}));

//配置路由映射
require('./src/config/routes')(app,mongoose,logger);

app.listen(configs.site.port,function (err) {
    if(err){
        console.log(`端口${configs.site.port}已被占用！`);
    }
    console.info(`项目已启动，访问 http://${configs.site.host}:${configs.site.port}/ 访问！`);
});