define([
	'app',
	'angular'
	], function (app,angular) {
	'use strict';

	/* Controllers */
	app.controller('footerCtrl', ['$scope', function ($scope) {
		$scope.footerContent = 'This is my footer';
	}]);
});