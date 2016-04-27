var Skill = require('../models/skill');
var User = require('../models/user');

function getSkills(callback){
	Skill.find({}, callback)
}

function addSkill(nameSkill, StackName, callback){
	var newSkill = Skill({
		name: nameSkill,
		StackName: StackName
	});

	newSkill.save(callback);	
}

function dellSkill(nameSkill, callback){
	Skill.findOneAndRemove({ name: nameSkill}, callback);
}

/**
* Work with user's skill
*/
function addUserSkill(userName, skillName, age, level, callback){
	Skill.findOne({name: skillName}, function(err, skill){
		if (err) throw err;
		User.findOne({name: userName}, function(err, user){
			if (err) throw err;
			console.log(user)
		})

	/*	var skillId = [];

	for(var i = skill.length-1;i>-1;i--){
		skillId.push(skill[i]._id)
	}*/


		/*skills: [{skill: skillId}]*/

	newUser.save(callback);
	});
}

module.exports = {
	getSkills: getSkills,
	addSkill: addSkill,
	dellSkill: dellSkill,
	addUserSkill: addUserSkill
}