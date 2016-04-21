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
					}
				},
				url: '/users/:name',
				templateUrl: '/templates/user.html',
				controller: 'UserCtrl'
			})
			$urlRouterProvider.otherwise('/');
	}
})();
