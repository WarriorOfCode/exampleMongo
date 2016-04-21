"use strict";

var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var path = require('path');
var pages = require('./controllers/pages');
var api = require('./controllers/api');

app.engine('html', require('ejs').renderFile);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(1337, function(){
    console.log('Express server listening on port 1337');
});

app.set('views', __dirname+'/app')
app.use(express.static(path.join(__dirname + '/app')));
app.use('/api', api);