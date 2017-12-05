/**
 * Created by Arthur on 2017/1/6.
 */
const mongoose = require('mongoose');
const BlogSchema = require('../schema/blog');

const Blog = mongoose.model('Blog',BlogSchema);

module.exports = Blog;