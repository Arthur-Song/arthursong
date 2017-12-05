/**
 * Created by Arthur on 2017/1/6.
 */
const mongoose = require('mongoose');
const ReplySchema = require('../schema/reply');

const Reply = mongoose.model('Reply',ReplySchema);

module.exports = Reply;