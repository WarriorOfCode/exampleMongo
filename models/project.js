"use strict";

var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/test');

var ProjectSchema = new mongoose.Schema( {
	date: {
		type: String,
	},
	StackName: {
		type: String,
	}
});

var Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;