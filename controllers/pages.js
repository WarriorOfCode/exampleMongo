"use strict";

var express = require('express');
var router = express.Router();
var userService = require('../services/userService');
var User = require('../models/user');

router.get('/users', function(req, res){
	res.render('index.html');
});

module.exports = router;