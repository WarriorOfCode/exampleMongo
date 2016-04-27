(function(){
	"use strict";
	angular
		.module('Mean')
		.controller('UsersCtrl', ['$scope', '$http', UsersCtrl]);

	function UsersCtrl($scope, $http) {
		function getUsers(){
			$http.get('/api/users')
			.success(function(data){
				$scope.users = data;
			})
			.error(function(data){
				console.log(data);
			})
		}

		getUsers();

		$scope.addUser = function () {
			$http.put('/api/users', $scope.user)
			.success(function(data){
				getUsers();
				console.log(data)
			})
			.error(function(data){
				console.log(data)
			})
		}

		$scope.delUser = function(userName) {
			$http.delete('/api/users/'+userName)
			.success(function(data){
				getUsers();
			})
			.error(function(data){
				console.log(data)
			})
		}

		$scope.editModal = function(index, userId){
			$scope.userEdit = $scope.users[index];
			$scope.userIdEdit = userId;
		}

		$scope.editUser = function(id) {
			$http.post('/api/users', $scope.userEdit)
			.success(function(data){
				console.log(data)
				$scope.userEdit = null;
			})
			.error(function(data){
				console.log(data);
			})
		}
	}
})();