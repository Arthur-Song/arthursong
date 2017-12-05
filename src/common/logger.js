/**
 * Created by Arthur on 2017/1/8.
 */
const configs = require('../../config.default');
const log4js = require('log4js');
const path = require('path');

log4js.configure({
    appenders: [
        { type: 'console' },
        {
            type: 'file',
            filename: path.join(__dirname,'../../logs/arthursong.log'),
            maxLogSize: 1024*1024*10, // 10M
            category: 'absolute-logger'
        }
    ]
});

const logger = log4js.getLogger('absolute-logger');
logger.setLevel(configs.debug ? 'DEBUG':'ERROR');

module.exports = logger;
