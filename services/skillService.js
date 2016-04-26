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

module.exports = {
	getSkills: getSkills,
	addSkill: addSkill,
	dellSkill: dellSkill
}