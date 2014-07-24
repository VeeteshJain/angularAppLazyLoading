define([
	'app',
	'angular'
	], function (app,angular) {
	'use strict';
	/* Controllers */
	app.controller('masterCtrl', ['$scope','$rootScope', function ($scope,$rootScope) {
		$scope.header = {
			'profile' : {
				'orderRight' : 1,
				'title' : 'Profile',
				'template' : '<p>Profile</p>',
				'templateUrl' : 'app/js/templates/common/header/profile'
			},
			'home' : {
				'orderRight' : 2,
				'title' : 'Home',
				'template' : '<p>Home</p>',
				'templateUrl' : 'app/js/templates/common/header/home'
			}
		};
	}]);
});