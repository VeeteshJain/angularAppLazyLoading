define([
	'app',
	'angular', 
	'myHome/services/services'
	], function(app,angular, services) {
	'use strict';

  /* Directives */
	app.directive('appVersion', ['version', function(version) {
		return function(scope, elm, attrs) {
			elm.text(version);
		};
	}]);
/*	return angular.module('myHomeApp.directives', ['myHomeApp.services'])
		.directive('appVersion', ['version', function(version) {
			return function(scope, elm, attrs) {
				elm.text(version);
		};
	}]);*/
});
