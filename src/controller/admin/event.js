/**
 * Created by Arthur on 2017/1/12.
 */
const express = require('express');
const router = express.Router();
const Event = require('../../proxy/event');

router.get('/:uid',(req,res,next)=>{
    let { uid }=req.params;
    if(!uid){
        return next(new Error('[EVENT NONE UID ERROR]:无此用户！'));
    }
    Event.findByUid(uid,(err,events)=>{
        if(err){
            return next(err);
        }
        return res.json({events});
    });
});

module.exports = router;