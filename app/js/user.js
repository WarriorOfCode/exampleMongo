(function(){
	"use strict";
angular
	.module('Mean')
	.controller('UserCtrl', ['$scope', '$http', 'userObject', UserCtrl]);

function UserCtrl($scope, $http, userObject) {
	$scope.user = userObject.data[0];
	$scope.getSkills = function(name){
		$http.get('/api/users/'+name+'/skills')
		.success(function(data){
			console.log(data)
		})
		.error(function	(data){
			console.log(data)
		})
	}
}
})();