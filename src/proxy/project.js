/**
 * Created by Arthur on 2017/1/12.
 */
'use strict';
const Project = require('../model/project');
const User = require('../model/user');
const MessageUtil = require('../common/message');

/**
 * 保存项目
 * @param _blog
 * @param cb
 */
exports.saveProject=function(_project,cb){
    var project = {};
    project.title = _project.title;
    project.github = _project.github;
    project.preview = _project.preview;
    project.content = _project.content;
    project.is_public = _project.is_public;
    project.has_done = _project.has_done;
    project.summary = _project.summary;
    project.tags = _project.tags;
    project.author = _project.author;
    project.seo = _project.seo;
    project.tags = _project.tags;
    project.content_is_html = true;
    project.deleted = false;

    Project.create(project,(err,project)=>{
        if(err){
            return cb(err);
        }
        //给所有管理员发送通知消息
        MessageUtil.sendMsgToAdmins('用户新增博客提醒',project._id,null);
        //更新user的projects
        User.findOneAndUpdate({_id:project.author},{$push:{projects:project._id}},{},(err)=>{
            if(err){
                return cb(err);
            }
            return cb(null,project);
        });
    });
};

/**
 * 根据用户id查找项目列表
 * @param uid
 * @param cb
 */
exports.findByUid=function(uid,page,search,cb){
    let query={};
    if(search.keyword && search.tag){
        query={tags:search.tag,title:new RegExp(''+search.keyword,'i')};
    }else if(search.keyword && !search.tag){
        query={title:new RegExp(''+search.keyword,'i')}
    }else if(!search.keyword && search.tag){
        query={tags:search.tag}
    }else{
        query={}
    }
    query.author=uid;
    Project.count(query,(err,count)=> {
        if (err) {
            return cb(err);
        }
        Project.find(query)
            .skip((page-1)*12)
            .limit(12)
            .sort('-meta.createAt')
            .populate('author')
            .exec((err,projects)=>{
                if(err){
                    return cb(err);
                }
                return cb(null,projects,count);
            });
    });
};
/**
 * 根据条件查找项目
 * @param query
 * @param cb
 */
exports.findAllProjects=function(page,search,cb){
    let query={};
    if(search.keyword && search.tag){
        query={tags:search.tag,title:new RegExp(''+search.keyword,'i')};
    }else if(search.keyword && !search.tag){
        query={title:new RegExp(''+search.keyword,'i')}
    }else if(!search.keyword && search.tag){
        query={tags:search.tag}
    }else{
        query={}
    }
    Project.count(query,(err,count)=>{
        if(err){
            return cb(err);
        }
        Project.find(query)
            .skip((page-1)*12)
            .limit(12)
            .sort('-meta.createAt')
            .populate('author')
            .exec((err,projects)=>{
                if(err){
                    return cb(err);
                }
                return cb(null,projects,count);
            });
    })
};

/**
 * 根据id获取blog
 * @param id
 * @param cb
 */
exports.getById=function(id,cb){
    Project.findOne({_id:id})
        .populate('author')
        .exec((err,project)=>{
            if(err){
                return cb(err);
            }
            return cb(null,project);
        })
};

/**
 * 根据id删除项目
 * @param id
 * @param cb
 */
exports.deleteById=function(id,cb){
    Project.findByIdAndUpdate(id,{ $set: { deleted: true }},(err)=>{
        if(err){
            return cb(err);
        }
        return cb(null);
    });
};
exports.recoverById=function(id,cb){
    Project.findByIdAndUpdate(id,{ $set: { deleted: false }},(err)=>{
        if(err){
            return cb(err);
        }
        return cb(null);
    });
}
/**
 * 根据id公开项目
 * @param id
 * @param cb
 */
exports.publicById=function(id,cb){
    Project.findByIdAndUpdate(id,{ $set: { is_public: true }},(err)=>{
        if(err){
            return cb(err);
        }
        return cb(null);
    });
};
/**
 * 根据id私有项目
 * @param id
 * @param cb
 */
exports.privateById=function(id,cb){
    Project.findByIdAndUpdate(id,{ $set: { is_public: false }},(err)=>{
        if(err){
            return cb(err);
        }
        return cb(null);
    })
};
/**
 * 更新项目
 * @param project
 * @param cb
 */
exports.update=function(project,cb){
    Project.findByIdAndUpdate(project.id, {$set:{
        title:project.title,
        seo:project.seo,
        github:project.github,
        has_done:project.has_done,
        preview:project.preview,
        tags:project.tags,
        is_public:project.is_public,
        summary:project.summary,
        content:project.content
    }},(err,_project)=>{
        if(err){
            return cb(err);
        }
        return cb(null,_project);
    })
}
/**
 * 根据id移除项目
 * @param id
 * @param cb
 */
exports.removeById=function(id,cb){
    Project.findByIdAndRemove(id,(err)=>{
        if(err){
            return cb(err);
        }
        return cb(null);
    });
}