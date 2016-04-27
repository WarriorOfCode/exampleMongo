var Skill = require('../models/skill');
var User = require('../models/user');

function getUsers (callback){
	User.find({}, callback);
};

function getUserByName(name, callback){
	User.find({name: name}, callback);
};

function addUser(name, email, callback){
/*	var skillId = [];

	for(var i = skill.length-1;i>-1;i--){
		skillId.push(skill[i]._id)
	}*/

	var newUser = User({
		name: name,
		email: email
		/*skills: [{skill: skillId}]*/
	});

	newUser.save(callback);
};

function dellUser(name, callback){
	User.findOneAndRemove({ name: name}, callback);
};

function editUser(id, name, email, callback){
	User.findById(id, function(err, user){
		user.name = name;
		user.email = email;

		user.save(callback);
	});
};

function getSkills(userName, callback){
	User.findOne({name: userName})
	.populate('skills.skill')
	.exec(callback)
};

module.exports = {
	getUsers: getUsers,
	getUserByName: getUserByName,
	addUser: addUser,
	dellUser: dellUser,
	editUser: editUser,
	getSkills: getSkills
}