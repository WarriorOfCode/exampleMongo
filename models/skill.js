"use strict";

var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/test');

var SkillShema = new mongoose.Schema( {
	name: {
		type: String,
		default: "AngularJS",
		unique: true
	},
	StackName: {
		type: String,
	}
});

var Skill = mongoose.model('Skill', SkillShema);

module.exports = Skill;