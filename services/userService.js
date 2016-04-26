var Skill = require('../models/skill');
var User = require('../models/user');

function getUsers (callback){
	User.find({}, callback);
};

function getUserByName(name, callback){
	User.find({name: name}, callback);
}

function addUser(name, age, email, skill, callback){

	var newUser = User({
		name: name,
		age: age,
		email: email,
		skills: [skill._id]
	});

	newUser.save(callback);
}

function dellUser(name, callback){
	User.findOneAndRemove({ name: name}, callback);
}

function editUser(id, name, age, email, callback){
	User.findById(id, function(err, user){
		user.name = name;
		user.age = age;
		user.email = email;

		user.save(callback);
	})
}

function getSkills(userName, callback){
	User.findOne({name: userName})
	.populate('skills')
	.exec(callback)
}

module.exports = {
	getUsers: getUsers,
	getUserByName: getUserByName,
	addUser: addUser,
	dellUser: dellUser,
	editUser: editUser,
	getSkills: getSkills
}