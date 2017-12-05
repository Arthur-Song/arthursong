/**
 * Created by arthursong on 17/1/8.
 */
const mailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const util = require('util');
const async = require('async');
const configs = require('../../config.default');
const logger = require('./logger');
const transporter = mailer.createTransport(smtpTransport(configs.mail));
const SITE_ROOT_URL = 'http://'+configs.site.host+':'+configs.site.port;

exports.sendMail=sendMail; //发送邮件

function sendMail(data,cb){
    //调试模式禁止发送邮件
    if(configs.debug){
        return;
    }
    async.retry({times:5},(done)=>{
        transporter.sendMail(data,(err)=>{
            if(err){
                logger.error('邮件发送失败！',err,data);
                return done(err);
            }
            return done();
        });
    },(err)=>{
        if(err){
            logger.error('邮件多次尝试发送失败！',err,data);
            if(cb){
                return cb(err);
            }
        }
        logger.info('邮件发送成功！',data);
        return cb(null);
    });
}

/**
 * 发送账户激活邮件
 * @param who 用户
 * @param token
 * @param name ArthurSong
 */
exports.sendActiveMail = function( who , token , name , cb){
    let from    = util.format('%s <%s>', configs.site.name, configs.mail.auth.user);
    let to      = who;
    var subject = configs.site.name + '管理员帐号激活';
    var html    = `
        <p>您好：${name}</p>
        <p>请点击下面的链接来激活帐户：</p>
        <a href="${SITE_ROOT_URL}/active_account?key=${token}&name=${name}">激活链接</a>
        <p>若非您本人操作，说明有人滥用了您的电子邮箱，请删除此邮件，我们对给您造成的打扰感到抱歉。</p>
        <p>${configs.site.name} 管理员 谨上。</p>
    `;
    exports.sendMail({
        from: from,
        to: to,
        subject: subject,
        html: html
    },cb);
};
/**
 * 发送密码重置通知邮件
 * @param who
 * @param token
 * @param name
 */
exports.sendResetPassInfoMail = function( who , name , cb){
    let from    = util.format('%s <%s>', configs.site.name, configs.mail.auth.user);
    let to      = who;
    var subject = configs.site.name + '管理员帐号密码重置通知';
    var html    = `
        <p>您好：${name}</p>
        <p>您的密码已重置成功,密码与您的用户名相同。</p>
        <p>若非您本人操作，说明有人滥用了您的电子邮箱，请删除此邮件，我们对给您造成的打扰感到抱歉。</p>
        <p>${configs.site.name} 管理员 谨上。</p>
    `;
    exports.sendMail({
        from: from,
        to: to,
        subject: subject,
        html: html
    },cb);
};