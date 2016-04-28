var Skill = require('../models/skill');
var User = require('../models/user');

function getUsers (callback){
	User.find({}, callback);
};

function getUserByName(name, callback){
	User.find({name: name}, callback);
};

function addUser(name, email, callback){

	var newUser = User({
		name: name,
		email: email
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

function addSchool(userName, place, speciality, degree, endYear, callback){
	User.findOne({name: userName}, function(err, user){
		if (err) throw err;
		user.education.push({
			place: place,
			speciality: speciality,
			degree: degree,
			endYear: endYear
		});

		user.save(callback);
	});
};

function addTrainging(userName, year, name, callback){
	User.findOne({name: userName}, function(err, user){
		if (err) throw err;
		user.training.push({
			year: year,
			name: name
		});

		user.save(callback);
	});
};

module.exports = {
	getUsers: getUsers,
	getUserByName: getUserByName,
	addUser: addUser,
	dellUser: dellUser,
	editUser: editUser,
	getSkills: getSkills,
	addSchool: addSchool,
	addTrainging: addTrainging
}