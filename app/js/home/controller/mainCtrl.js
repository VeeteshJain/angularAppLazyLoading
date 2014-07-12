define([
	'app',
	'angular'
	], function (app,angular) {
	'use strict';

	/* Controllers */
	app.controller('mainCtrl', ['$scope', function ($scope) {
		$scope.mainContent = 'This is my MAIN';
	}]);
});