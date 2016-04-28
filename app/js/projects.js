(function(){
	"use strict";
angular
	.module('Mean')
	.controller('ProjectsCtrl', ['$scope', '$http', 'projectObject', ProjectsCtrl]);

function ProjectsCtrl($scope, $http, projectObject) {
	$scope.projects = projectObject.data;
	$scope.addProject = function(){
		$http.put('/api/projects', $scope.project)
		.success(function(data){
			console.log(data)
		})
		.error(function(data){
			console.log(data)
		})
	}

	$scope.delProject = function(projectId) {
		$http.delete('/api/projects/'+projectId)
		.success(function(data){
			console.log(data);
		})
		.error(function(data){
			console.log(data)
		})
	}
}
})();