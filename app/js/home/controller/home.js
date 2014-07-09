define([
	'app',
	'angular'
	], function (app,angular) {
	'use strict';

	/* Controllers */
	app.controller('home', ['$scope', function ($scope) {
		$scope.homeContent = 'This is my Home';
	}]);
});