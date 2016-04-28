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
			user.skills.push({
				skill: skill._id,
				years: age,
				level: level
			});
			user.save(callback);
		});
	});
};



module.exports = {
	getSkills: getSkills,
	addSkill: addSkill,
	dellSkill: dellSkill,
	addUserSkill: addUserSkill
}