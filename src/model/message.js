/**
 * Created by Arthur on 2017/1/12.
 */
const mongoose = require('mongoose');
const MessageSchema = require('../schema/message');

const Message = mongoose.model('Message',MessageSchema);

module.exports = Message;