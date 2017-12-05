/**
 * Created by Arthur on 2017/1/12.
 */
const Event = require('../model/event');

/**
 * 通过用户id获取所有event
 * @param id
 * @param cb
 */
exports.findByUid=function(id,cb){
    Event.find({master_id:id})
        .exec(cb);
};

exports.findAllByUid=function(id,cb){
    Event.find({master_id:id},(err,_events)=>{
        if(err){
            return cb(err);
        }else{
            const events=[];
            for(let i=0;i<_events.length;i++){
                events.push({
                    id:_events[i]._id,
                    color:_events[i].color,
                    title:_events[i].title,
                    level:_events[i].level,
                    start:_events[i].start,
                    end:_events[i].end
                });
            }
            return cb(null,events);
        }
    });
};
/**
 * 保存事件
 * @param event
 * @param cb
 */
exports.saveEvent=function(_event,cb){
    let { master_id , title , level , start , end , has_finish }=_event;
    const event = new Event();
    event.master_id=master_id;
    event.title=title;
    event.level=level;
    event.start=start;
    event.end=end;
    event.has_finish=has_finish;

    event.save(cb);
};
/**
 * 更新事件
 * @param _event
 * @param cb
 */
exports.update=function(_event,cb){
    Event.findOne({_id:_event.id},(err,event)=>{
        if(err){
            return cb(err);
        }
        event.level = _event.level;
        event.title = _event.title;
        event.start = _event.start;
        event.end = _event.end;
        event.has_finish = _event.has_finish;

        event.save(cb);
    });
};

/**
 * 根据id删除事件
 * @param id
 * @param cb
 */
exports.removeById=function(id,cb){
    Event.remove({_id:id})
        .exec(cb);
};

/**
 * 完成事件
 * @param id
 * @param cb
 */
//exports.finishEvent=function(id,cb){
//
//}