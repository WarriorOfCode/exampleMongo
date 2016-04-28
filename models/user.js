"use strict";

var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema( {
	name: {
		type: String,
		required: true,
		unique: true
	},
	description: {
		type: String,
		default: "Web developer with expirience" },
	email: {
		type: String,
		unique: true,
		required: true},
	skills: [{
		skill: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Skill'},
		years: {
			type: Number,
			default: "1"
		},
		level: {
			type: String,
			default: "Intermediate"
		}
	}],
	education:[{
		place:{
			type: String
		},
		speciality:{
			type: String
		},
		degree:{
			type: String
		},
		endYear:{
			type: Number
		}
	}],
	training: [{
		year:{
			type: Number
		},
		name:{
			type: String
		}
	}],
	projects: [{
		project:{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Project'
		},
		position:{
			type: String
		},
		participation:{
			type: String
		},
		tools:{
			type: String
		},
		technologies:{
			type: String
		}
	}]
});

var User = mongoose.model('User', UserSchema);

module.exports = User;