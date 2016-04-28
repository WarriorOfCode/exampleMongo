(function(){
	"use strict";
angular
	.module('Mean')
	.controller('UserCtrl', ['$scope', '$http', 'userObject', 'projectObject', UserCtrl]);

function UserCtrl($scope, $http, userObject, projectObject) {
	$scope.user = userObject.data[0];
	$scope.projects = projectObject.data;
	$scope.getSkills = function(name){
		$http.get('/api/users/'+name+'/skills')
		.success(function(data){
			$scope.userSkill = data;
		})
		.error(function	(data){
			console.log(data)
		})
	}

	$scope.addSkill = function(name){
		$http.put('/api/users/'+name+'/skills', $scope.skill)
		.success(function(data){
			console.log(data)
		})
		.error(function(data){
			console.log(data)
		})
	}

	$scope.addProject = function(userName){
		$http.put('/api/users/'+userName+'/projects', $scope.project)
		.success(function(data){
			console.log(data)
		})
		.error(function(data){
			console.log(data)
		})
	}

	$scope.addShool = function(userName){
		$http.put('/api/users/'+userName+'/school', $scope.school)
		.success(function(data){
			console.log(data)
		})
		.error(function(data){
			console.log(data)
		})
	}

	$scope.addTraining = function(userName){
		$http.put('/api/users/'+userName+'/training', $scope.training)
		.success(function(data){
			console.log(data)
		})
		.error(function(data){
			console.log(data)
		})
	}
}
})();