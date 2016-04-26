(function(){
	"use strict";
	angular
		.module('Mean', ['ui.router', 'ngResource'])
		.config(['$stateProvider', '$urlRouterProvider', configuration]);

	function configuration($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('list', {
				resolve:{
					skillsObject: function($http){
						return $http({method: 'GET', url: '/api/skills/'})
					}
				},
				url: '/',
				templateUrl: '/templates/users.html',
				controller: 'UsersCtrl'
			})
			.state('user', {
				resolve:{
					userObject: function($http,  $stateParams){
						return $http({method: 'GET', url: '/api/users/'+ $stateParams.name})
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
			$urlRouterProvider.otherwise('/');
	}
})();
