/**
 * Created by Arthur on 2017/1/9.
 */
const bcrypt = require('bcryptjs');
const configs = require('../../config.default');

/**
 * 验证用户名格式
 * 规则：只能有数字，字母，- 或 _ 组成
 * @param name
 * @returns {boolean}
 */
exports.validateName=function(name){
    return (/^[a-zA-Z0-9\-_]+$/i).test(name);
};
/**
 * 验证密码规则:
 * 1、长度8~16位；
 * 2、数字、字母、字符至少包含两种。
 * @param password
 */
exports.validatePassword=function(password){
    return (/^((?=.*\d)(?=.*\D)|(?=.*[a-zA-Z])(?=.*[^a-zA-Z]))^.{8,16}$/).test(password);
}
/**
 * 加密password生成hash
 * @param password
 * @param cb
 */
exports.generatePassHash=function(password,cb){
    bcrypt.genSalt(configs.SALT_WORK_FACTOR,function(err,salt){
        if(err){
            return cb(err);
        }else{
            //获取哈希值
            bcrypt.hash(password,salt,function(err,hash){
                if(err) return cb(err);
                return cb(null,hash);
            });
        }
    });
}