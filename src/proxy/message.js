/**
 * Created by Arthur on 2017/1/12.
 */
const Message = require('../model/message');

/**
 * 根据id将消息标记为已读
 * @param id
 * @param cb
 */
exports.readById=function(id,cb){
    Message.findByIdAndUpdate(id,{$set:{has_read:true}},(err)=>{
        if(err){
            return cb(err);
        }
        return cb(null);
    });
};
/**
 * 根据id移除消息
 * @param id
 * @param cb
 */
exports.removeById=function(id,cb){
    Message.findByIdAndRemove(id,(err)=>{
        if(err){
            return cb(err);
        }
        return cb(null);
    });
};
/**
 * 根据uid获取消息列表
 * @param id
 * @param cb
 */
exports.findByUid=function(page,uid,cb){
    Message.count({master:uid},(err,count)=>{
        if(err){
            return cb(err);
        }
        Message.find({master:uid})
            .skip((page-1)*20)
            .limit(20)
            .sort('-meta.createAt')
            .populate('author')
            .populate('project')
            .populate('blog')
            .populate('reply')
            .sort('-meta.createAt')
            .exec((err,messages)=>{
                if(err){
                    return cb(err);
                }
                return cb(null,messages,count);
            });
    });
};
/**
 * 根据uid获取最新6条未读信息
 * @param uid
 * @param cb
 */
exports.findSixUnReadMessagesByUid=function(uid,cb){
    Message.find({master:uid,has_read:false})
        .sort('-meta.createAt')
        .limit(6)
        .exec(cb);
};

exports.findUnReadsByUid = function(uid,cb){
    Message.find({master:uid,has_read:false})
        .populate('author')
        .populate('project')
        .populate('blog')
        .populate('reply')
        .sort('-meta.createAt')
        .exec(cb)
}