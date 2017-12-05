/**
 * Created by Arthur on 2017/1/23.
 */
const Message = require('../proxy/message');

exports.unReads = function(req,res,next){
    let { user }= req.session;
    Message.findUnReadsByUid(user._id,(err,unreads)=>{
        if(err){
            return next(err);
        }
        req.app.locals.unreads=unreads;
        next();
    });
}