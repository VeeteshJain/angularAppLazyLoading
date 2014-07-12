define([
	'app',
	'angular'
	], function (app,angular) {
	'use strict';

	/* Controllers */
	app.controller('headerCtrl', ['$scope', function ($scope) {
		$scope.headerContent = 'This is my HEADER';
	}]);
});