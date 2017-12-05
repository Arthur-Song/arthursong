/**
 * Created by Arthur on 2017/2/8.
 */
const Pool = require('generic-pool').Pool;
const MongoClient = require('mongodb').MongoClient;
const configs = require('../../config.default');

const pool = new Pool({
    name:'mongodb',
    create(cb){
        MongoClient.connect(configs.mongodb.url,(err,db)=>{
            if(err){
                return cb(err);
            }
            return cb(null,db);
        });
    },
    destroy(db){
        db.close();
    },
    max: 1,
    min: 1,
    idleTimeoutMillis: 300000,
    log: false
});

module.exports = pool;