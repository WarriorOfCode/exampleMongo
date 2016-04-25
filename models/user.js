"use strict";

var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema( {
	name: {
		type: String,
		default: "Ivan",
		unique: true
	},
	age: {
		type: Number,
		min: 6,
		index: true},
	email: {
		type: String,
		unique: true,
		required: true},
	skills: [{
		name: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Skill'
		}
	}]
});

var User = mongoose.model('User', UserSchema);

module.exports = User;