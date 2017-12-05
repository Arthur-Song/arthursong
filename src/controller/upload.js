/**
 * Created by Arthur on 2017/1/13.
 */
const express = require('express');
const router = express.Router();
const store = require('../common/store');

router.post('/upload',(req,res,next)=>{
    var isFileLimit = false;
    req.busboy.on('file', function (fieldname, file, filename, encoding, mimetype) {
        file.on('limit', function () {
            isFileLimit = true;

            res.json({
                success: false,
                msg: 'File size too large. Max is ' + config.file_limit
            })
        });

        store.upload(file, {filename: filename}, function (err, result) {
            if (err) {
                return next(err);
            }
            if (isFileLimit) {
                return;
            }
            res.json({
                success: true,
                url: result.url,
            });
        });

    });

    req.pipe(req.busboy);
})

module.exports = router;