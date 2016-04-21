"use strict";

var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/test');

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
});

var User = db.model('User', UserSchema);

module.exports = User;