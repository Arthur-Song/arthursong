/**
 * Created by arthursong on 17/1/8.
 */
const User = require('../model/user');
const uuidV4 = require('uuid');
const configs = require('../../config.default');

/**
 * 根据关键字获取一组用户
 * @param query
 * @param opt
 * @param cb
 */
exports.findUsersByQuery=function(query,opt,cb){
    User.find(query,'',opt,cb);
};

/**
 * 分页显示所有用户包括管理员
 * @param page
 * @param cb
 */
exports.listAdmins=function(page=1,search,cb){
    let query={};
    if(search.keyword && search.role){
        query={role:{$gte:search.role},$or:[{username:new RegExp(''+search.keyword,'i')},{email:new RegExp(''+search.keyword,'i')}]};
    }else if(search.keyword && !search.role){
        query={role:{$gte:50},$or:[{username:new RegExp(''+search.keyword,'i')},{email:new RegExp(''+search.keyword,'i')}]};
    }else if(!search.keyword && search.role){
        query={role:{$gte:search.role}};
    }else{
        query={role:{$gte:50}}
    }
    User.count(query,(err,count)=>{
        if(err){
            return cb(err);
        }
        User.find(query)
            .skip((page-1)*10)
            .limit(10)
            .sort('-meta.createAt') //根据创建时间倒序排列
            .exec((err,users)=>{
                if(err){
                    return cb(err);
                }
                return cb(null,users,count);
            });
    })
};
/**
 * 分页显示普通用户
 * @param page
 * @param cb
 */
exports.listUsers=function(page=1,search,cb){
    let query={};
    if(search.keyword && search.gender){
        query={role:{$lte:10},gender:search.gender,$or:[{username:new RegExp(''+search.keyword,'i')},{email:new RegExp(''+search.keyword,'i')}]};
    }else if(search.keyword && !search.gender){
        query={role:{$lte:10},$or:[{username:new RegExp(''+search.keyword,'i')},{email:new RegExp(''+search.keyword,'i')}]};
    }else if(!search.keyword && search.gender){
        query={role:{$lte:10},gender:search.gender};
    }else{
        query={role:{$lte:10}}
    }
    User.count(query,(err,count)=>{
        if(err){
            return cb(err);
        }
        User.find(query)
            .skip((page-1)*10)
            .limit(10)
            .sort('-meta.createAt') //根据创建时间倒序排列
            .exec((err,users)=>{
                if(err){
                    return cb(err);
                }
                return cb(null,users,count);
            });
    })
};
/**
 * 通过id获取一个用户
 * @param id
 * @param cb
 */
exports.getById=function(id,cb){
    if(!id){
        return cb(new Error('[USER ID CANNOT BE NONE]:用户id不能为空！'));
    }
    User.findOne({_id:id})
        .exec(cb);
}
/**
 * 添加管理员
 * @param _user
 * @param cb
 */
exports.saveUser=function(_user,cb){
    let { username , password , role , avatar , email , gender , remark , active ,ip }=_user;
    const user = {};
    user.username = username.trim();
    user.password = password.trim();
    user.email = email.trim();
    user.ip = ip && ip.trim() || '';
    user.gender = gender;
    if(gender === 1){
        user.avatar = (avatar && avatar.trim()) || configs.user.avatar_female;
    }else{
        user.avatar = (avatar && avatar.trim()) || configs.user.avatar_male;
    }
    user.remark = remark && remark.trim();
    user.role = role || 10;
    user.active = active || false;
    user.accessToken = uuidV4();

    User.create(user,(err,_user)=>{
        if(err){
            return cb(err);
        }
        return cb(null,_user);
    });
}
/**
 * 根据用户名或邮箱查找一个用户，管理员登录
 * @param loginname
 * @param cb
 */
exports.getUserByUsernameOrEmail=function(loginname,cb){
    User.findOne({$or:[{username:loginname},{email:new RegExp('^'+loginname+'$', 'i')}]})
        .exec(cb);
}
/**
 * 根据用户名和token激活用户
 * @param username
 * @param key
 * @param cb
 */
exports.getUserByUsernameAndKey=function(username,key,cb){

}
/**
 * 根据用户名查找用户
 * @param username
 * @param cb
 */
exports.getUserByUsername=function(username,cb){
    User.findOne({username:username.trim()})
        .populate({
            path:'projects',
            match:{ deleted:false , is_public:true }, //非删除状态，且公开
            sort:'-meta.lastModified +meta.createAt'
        })
        .populate({
            path:'blogs',
            match:{ deleted:false , is_public:true }, //非删除状态，且公开
            sort:'-meta.lastModified +meta.createAt'
        })
        .exec(cb);
};
/**
 * 根据id删除用户（真正删除）
 * @param id
 * @param cb
 */
exports.deleteUserById=function(id,cb){
    User.remove({_id:id},(err)=>{
        if(err){
            return cb(err);
        }
        return cb(null);
    });
};