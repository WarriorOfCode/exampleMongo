(function(){
	"use strict";
angular
	.module('Mean')
	.controller('SkillsCtrl', ['$scope', '$http', 'skillsObject', SkillsCtrl]);

function SkillsCtrl($scope, $http, skillsObject) {
	$scope.skills = skillsObject.data;
	$scope.addSkill = function(){
		$http.put('/api/skills', $scope.skill)
		.success(function(data){
			console.log(data)
		})
		.error(function(data){
			console.log(data)
		})
	}

	$scope.delSkill = function(skillName) {
		$http.delete('/api/skills/'+skillName)
		.success(function(data){
			console.log(data);
		})
		.error(function(data){
			console.log(data)
		})
	}
}
})();