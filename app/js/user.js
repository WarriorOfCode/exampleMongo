(function(){
	"use strict";
angular
	.module('Mean')
	.controller('UserCtrl', ['$scope', 'userObject', UserCtrl]);

function UserCtrl($scope, userObject) {
	$scope.user = userObject.data[0];
}
})();