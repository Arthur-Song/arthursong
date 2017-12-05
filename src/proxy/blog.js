/**
 * Created by Arthur on 2017/1/12.
 */
'use strict';
const Blog = require('../model/blog');
const User = require('../model/user');
const EventProxy = require('eventproxy');
const MessageUtil = require('../common/message');
const _ = require('lodash');

/**
 * 保存博客
 * @param _blog
 * @param cb
 */
exports.saveBlog=function(_blog,cb){
    var blog = {};
    blog.title = _blog.title;
    blog.preview = _blog.preview;
    blog.content = _blog.content;
    blog.is_public = _blog.is_public;
    blog.summary = _blog.summary;
    blog.tags = _blog.tags;
    blog.author = _blog.author;
    blog.seo = _blog.seo;
    blog.tags = _blog.tags;
    blog.content_is_html = true;
    blog.deleted = false;
    //往blog插入一条数据
    Blog.create(blog,(err,blog)=>{
        if(err){
            return cb(err);
        }
        //给所有管理员发送通知消息
        MessageUtil.sendMsgToAdmins('用户新增博客提醒',blog._id,null);
        //更新user的blogs
        User.findOneAndUpdate({_id:blog.author},{$push:{blogs:blog._id}},{},(err)=>{
            if(err){
                return cb(err);
            }
            return cb(null,blog);
        });
    });
};
/**
 * 根据id获取blog
 * @param id
 * @param cb
 */
exports.getById=function(id,cb){
    Blog.findOne({_id:id})
        .populate('author')
        .exec((err,blog)=>{
            if(err){
                return cb(err);
            }
            if(blog){
                return cb(null,blog);
            }else{
                return cb(new Error('没有这篇博客'));
            }
        })
};

/**
 * 根据用户id查找博客列表
 * @param uid
 * @param cb
 */
exports.findByUid=function(uid,page,search,cb){
    var query= {};
    _.extend(query,search);
    if(query.title){
        query.title=new RegExp(''+query.title,'i');
    }
    query.author=uid;

    Blog.count(query,(err,count)=> {
        if (err) {
            return cb(err);
        }
        Blog.find(query)
            .skip((page-1)*10)
            .limit(10)
            .sort('-meta.createAt')
            .populate({
                path:'author',
                sort:'-meta.lastModified -meta.createAt'
            })
            .exec((err,blogs)=>{
                if(err){
                    return cb(err);
                }
                return cb(null,blogs,count);
            });
    });
}
/**
 *
 * @param cb
 */
exports.findAllBlogs=function(page,search,cb){
    var query= {};
    _.extend(query,search);
    if(query.title){
        query.title=new RegExp(''+query.title,'i');
    }
    console.log(query);
    Blog.count(query,(err,count)=>{
        if(err){
            return cb(err);
        }
        Blog.find(query)
            .skip((page-1)*10)
            .limit(10)
            .sort('-meta.createAt')
            .populate('author')
            .exec((err,blogs)=>{
                if(err){
                    return cb(err);
                }
                return cb(null,blogs,count);
            });
    });
}
/**
 * 根据id删除博客
 * @param id
 * @param cb
 */
exports.deleteById=function(id,cb){
    Blog.findOne({_id:id})
        .exec((err,blog)=>{
            if(err){
                return cb(err);
            }
            if(blog){
                blog.deleted = true;
                blog.save(cb);
            }else{
                return cb('没有这篇博客');
            }
        });
};
/**
 * 根据id恢复博客
 * @param id
 * @param cb
 */
exports.recoverById=function(id,cb){
    Blog.findByIdAndUpdate(id,{ $set: { deleted: false }},(err)=>{
        if(err){
            return cb(err);
        }
        return cb(null);
    })
};
/**
 * 根据id公开博客
 * @param id
 * @param cb
 */
exports.publicById=function(id,cb){
    Blog.findByIdAndUpdate(id,{ $set: { is_public: true }},(err)=>{
        if(err){
            return cb(err);
        }
        return cb(null);
    })
};
/**
 * 根据id私有博客
 * @param id
 * @param cb
 */
exports.privateById=function(id,cb){
    Blog.findByIdAndUpdate(id,{ $set: { is_public: false }},(err)=>{
        if(err){
            return cb(err);
        }
        return cb(null);
    })
};
/**
 * 根据id移除博客
 * @param id
 * @param cb
 */
exports.removeById=function(id,cb){
    Blog.findByIdAndRemove(id,(err)=>{
        if(err){
            return cb(err);
        }
        return cb(null);
    });
}
/**
 * 更新博客
 * @param blog
 * @param cb
 */
exports.update=function(blog,cb){
    Blog.findByIdAndUpdate(blog.id, {$set:{
        title:blog.title,
        seo:blog.seo,
        preview:blog.preview,
        tags:blog.tags,
        is_public:blog.is_public,
        summary:blog.summary,
        content:blog.content
    }},(err,_blog)=>{
        if(err){
            return cb(err);
        }
        return cb(null,blog);
    });
}