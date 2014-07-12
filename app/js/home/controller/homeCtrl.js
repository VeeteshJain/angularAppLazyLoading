define([
	'app',
	'angular'
	], function (app,angular) {
	'use strict';

	/* Controllers */
	app.controller('homeCtrl', ['$scope', function ($scope) {
		$scope.homeContent = 'This is my HOME';
	}]);
});