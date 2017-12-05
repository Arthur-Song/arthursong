/**
 * Created by Arthur on 2017/1/6.
 */
/**
 * 登录验证
 * @param reqq
 * @param res
 * @param next
 */
exports.loginRequired=function(req,res,next){
    let user=req.session.user;
    if(!user){
        return res.redirect("/admin/login");
    }
    next();
};
/**
 * 管理员验证要求
 * @param req
 * @param res
 * @param next
 */
exports.adminRequired=function(req,res,next){
    let user=req.session.user;
    if(user.role>=50){
        return next();
    }
    res.status(405);
    return res.render('error',{title:'权限不足',error:new Error('[Authority Dined Error] 权限不足!'),message:'[Authority Dined Error] 权限不足!'});
};
/**
 * 超级管理员验证要求
 * @param req
 * @param res
 * @param next
 */
exports.superAdminRequired=function(req,res,next){
    let user=req.session.user;
    if(user.role>=100){
        return next();
    }
    res.status(405);
    return res.render('error',{title:'权限不足',error:new Error('[Authority Dined Error] 权限不足!'),message:'[Authority Dined Error] 权限不足!'});
}