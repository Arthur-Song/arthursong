/**
 * Created by arthursong on 17/1/14.
 */
const configs  = require('../../config.default');
const utility = require('utility');
const path    = require('path');
const fs      = require('fs');

exports.upload = function (file, options, callback) {
    var filename = options.filename;

    var newFilename = utility.md5(filename + String((new Date()).getTime()) + configs.upload.salt) +
        path.extname(filename);

    var upload_path = configs.upload.dir;
    var base_url    = configs.upload.url;
    var filePath    = path.join(upload_path, newFilename);
    var fileUrl     = base_url +'/'+ newFilename;

    file.on('end', function () {
        callback(null, {
            url: fileUrl
        });
    });

    file.pipe(fs.createWriteStream(filePath));
};
