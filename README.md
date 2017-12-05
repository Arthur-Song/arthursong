# arthursong

## 介绍

arthursong 是使用 **Node.js** 和 **MongoDB** 开发的博客系统，界面优雅，前台兼容手机端，你完全可以用它搭建自己的博客系统。

## 安装部署

*不保证 Windows 系统的兼容性*

开发使用的是 [Node.js](https://nodejs.org) v4.4.0，[MongoDB](https://www.mongodb.org) 是 v3.x，[Redis](http://redis.io) 是 v3.x。

```
1. 安装 `Node.js[必须]` `MongoDB[必须]` `Redis[可选]` `pm2[可选]`
2. 启动 MongoDB 和 Redis
3. `$ make install` 安装 arthursong 的依赖包
4. `cp config.default.js config.js` 请根据需要修改配置文件
5. `cd src/` 进入src目录，修改init.js文件，运行`$ node init.js` 初始化超级管理员，默认密码为：520arthursong
6. `$ npm run start` 调试模式启动项目
7. `$ npm run start:prod` 使用pm2多节点集群方式启动项目
8. visit `http://localhost:3000`
9. done!
```

## 贡献

有任何意见或建议都欢迎提 issue，或者直接提给 [@arthur-song](https://github.com/arthur-song)

## License

MIT
