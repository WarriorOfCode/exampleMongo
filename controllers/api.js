"use strict";

var express = require('express');
var router = express.Router();
var userService = require('../services/userService');
var skillService = require('../services/skillService');
var validator = require('validator');

/**
*  Work with users
*/

router.get('/users', function(req, res){
	userService.getUsers(function(err, rows){
		if (err) throw err;
		res.json(rows);
	});
});

router.get('/users/:userName/skills', function(req, res){
	userService.getSkills(req.params.userName, function(err, rows){
		if (err) throw err;
		res.json(rows);
	});
});

router.get('/users/:userName', function(req, res){
	userService.getUserByName(req.params.userName, function(err, rows) {
		if (err) throw err;
		res.json(rows);
	});
});

router.put('/users', function(req, res){
	userService.addUser(req.body.name, req.body.email, function(err){
		if (err) throw err;
		console.log("User saved");
		res.send("User saved");
	});
});

router.delete('/users/:userName', function(req, res){
	userService.dellUser(req.params.userName, function(err) {
		if (err) throw err;
		console.log("User "+req.params.userName+" dead");
		res.send("user delete");
	});
});

router.post('/users', function(req, res){
	userService.editUser(req.body._id, req.body.name, req.body.email, function(err){
		if (err) throw err;
		res.send("User saved");
		console.log("User "+req.body.name+" changed")
	});
});


/**
*  Work with skills
*/
router.get('/skills', function(req, res){
	skillService.getSkills(function(err, rows){
		if (err) throw err;
		res.json(rows);
	});
});

router.put('/skills', function(req, res){
	skillService.addSkill(req.body.name, req.body.StackName, function(err){
		if (err) throw err;
		res.send("skill added")
	});
});

router.delete('/skills/:skillName', function(req, res){
	skillService.dellSkill(req.params.skillName, function(err) {
		if (err) throw err;
		console.log("Skill "+req.params.skillName+" dead");
		res.send("skill delete");
	});
});

router.put('/users/:userName/skills', function(req, res){
	skillService.addUserSkill(req.params.userName, req.body.name, req.body.age, req.body.level)
});
module.exports = router;