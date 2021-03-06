(function(){
	"use strict";
	angular
		.module('Mean', ['ui.router', 'ngResource'])
		.config(['$stateProvider', '$urlRouterProvider', configuration]);

	function configuration($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('list', {
				url: '/',
				templateUrl: '/templates/users.html',
				controller: 'UsersCtrl'
			})
			.state('user', {
				resolve:{
					userObject: function($http,  $stateParams){
						return $http({method: 'GET', url: '/api/users/'+ $stateParams.name})
					},
					projectObject: function($http){
						return $http({method: 'GET', url: '/api/projects/'})
					}
				},
				url: '/users/:name',
				templateUrl: '/templates/user.html',
				controller: 'UserCtrl'
			})
			.state('skills', {
				resolve:{
					skillsObject: function($http){
						return $http({method: 'GET', url: '/api/skills/'})
					}
				},
				url: '/skills',
				templateUrl: '/templates/skills.html',
				controller: 'SkillsCtrl'
			})
			.state('projects', {
				resolve:{
					projectObject: function($http){
						return $http({method: 'GET', url: '/api/projects/'})
					}
				},
				url: '/projects',
				templateUrl: '/templates/projects.html',
				controller: 'ProjectsCtrl'
			})
			$urlRouterProvider.otherwise('/');
	}
})();
