"use strict";

var mongoose = require('mongoose');

var ProjectSchema = new mongoose.Schema({
	date: {
		type: String,
	},
	customer: {
		type: String,
	},
	project: {
		type: String
	},
	team: {
		type: String
	},
	database: {
		type: String
	}
});

var Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;