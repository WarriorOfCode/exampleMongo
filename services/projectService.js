var User = require('../models/user');
var Project = require('../models/project');

function getProjects(callback){
	Project.find({}, callback)
};

function addProject(date, customer, project, team, base, callback){
	var newProject = Project({
		date: date,
		customer: customer,
		project: project,
		team: team,
		database: base
	});

	newProject.save(callback);	
};

function dellProject (projectId, callback){
	Project.findOneAndRemove({ _id: projectId}, callback);
};

function addUserProject(userName, project, position, participation, tools, technologies, callback){
	User.findOne({name: userName}, function(err, user){
		if (err) throw err;
		user.projects.push({
			project: project._id,
			position: position,
			participation: participation,
			tools: tools,
			technologies: technologies
		});

		user.save(callback);
	});
};

module.exports = {
	getProjects: getProjects,
	addProject: addProject,
	dellProject: dellProject,
	addUserProject: addUserProject
}