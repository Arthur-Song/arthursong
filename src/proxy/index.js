/**
 * Created by Arthur on 2017/1/19.
 */
const User = require('../model/user');
const Blog = require('../model/blog');
const Project = require('../model/project');

/**
 * 全站数据统计，用户，项目，博客
 */
exports.statisticAll=function(cb){
    let data={};
    User.count({},(err,ucount)=>{
        if(err){
            return cb(err);
        }
        data.userCount=ucount;
        Blog.count({},(err,bcount)=>{
            if(err){
                return cb(err);
            }
            data.blogCount = bcount;
            Project.count({},(err,pcount)=>{
                if(err){
                    return cb(err);
                }
                data.projectCount = pcount;
                return cb(null,data);
            })
        })
    })
};
/**
 * 用户数据统计
 * @param uid
 * @param cb
 */
exports.statisticUser=function(uid,cb){
    User.findById(uid)
        .populate('blogs')
        .populate('projects')
        .exec((err,user)=>{
            if(err){
                return cb(err);
            }
            return cb(null,{projectCount:user.length,blogCount:user.length});
        });
};
/**
 * 最新8篇博客
 * @param cb
 */
exports.latestBlogs=function(cb){
    Blog.find({})
        .populate('author')
        .sort('-meta.createAt')
        .limit(8)
        .exec(cb);
};

/**
 * 最新8个项目
 * @param cb
 */
exports.latestProjects=function(cb){
    Project.find({})
        .populate('author')
        .sort('-meta.createAt')
        .limit(8)
        .exec(cb);
};
