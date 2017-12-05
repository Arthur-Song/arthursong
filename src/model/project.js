/**
 * Created by Arthur on 2017/1/6.
 */
const mongoose = require('mongoose');
const ProjectSchema = require('../schema/project');

const Project = mongoose.model('Project',ProjectSchema);

module.exports = Project;