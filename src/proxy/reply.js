/**
 * Created by Arthur on 2017/1/12.
 */
const Reply = require('../model/reply');

/**
 * 保存恢复
 * @param _reply
 * @param cb
 */
exports.saveReply = function(_reply,cb){
    var reply = new Reply();
    if(_reply.blog){
        reply.blog = _reply.blog
    }
    if(_reply.project){
        reply.project = _reply.project
    }
    if(_reply.reply_fa){
        reply.reply_fa = _reply.reply_fa;
        _reply.content=`[@${_reply.reply_master}](/${_reply.reply_master}) `+_reply.content;
    }
    reply.content = _reply.content;
    reply.author = _reply.author;
    reply.content_is_html = true;
    reply.ups = [];
    reply.deleted = false;

    reply.save(cb);
};
/**
 * 根据博客id获取所有评论
 * @param bid
 * @param cb
 */
exports.getRepliesByBlogId=function(bid,cb){
    Reply.find({blog:bid})
        .populate('author')
        .exec(cb)
};
/**
 * 根据id删除回复
 * @param id
 * @param cb
 */
exports.removeById=function(id,cb){
    Reply.findByIdAndRemove(id,cb);
}
/**
 * 根据id获取回复
 * @param id
 * @param cb
 */
exports.getById=function(id,cb){
    Reply.findOne({_id:id})
        .populate('blog')
        .exec(cb);
}
/**
 * 更新评论
 * @param _reply
 * @param cb
 */
exports.update=function(_reply,cb){
    Reply.findByIdAndUpdate(_reply.id,{$set:{content:_reply.content}},cb);
}
/**
 * 点赞与取消点赞
 * @param rid
 * @param uid
 * @param cb
 */
exports.toggleThumbUp = function(rid,uid,cb){
    Reply.findOne({_id:rid})
        .exec((err,reply)=>{
            if(err){
                return cb(err);
            }
            var idx=reply.ups.indexOf(uid),add=false;
            if(idx >=0){
                reply.ups.splice(idx,1);
            }else {
                reply.ups.push(uid);
                add=true;
            }
            console.log(reply);
            reply.save((err)=>{
                if(err){
                    return cb(err);
                }
                return cb(null,reply,add);
            });
        })
}
