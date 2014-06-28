define([
	'app',
	'angular',
	'myHome/services/services'
	], function (app,angular, services) {
	'use strict';

	/* Filters */
  	app.filter('interpolate', ['version', function(version) {
		return function(text) {
			return String(text).replace(/\%VERSION\%/mg, version);
		};
	}]);
/*	return angular.module('myHomeApp.filters', ['myHomeApp.services'])
		.filter('interpolate', ['version', function(version) {
			return function(text) {
				return String(text).replace(/\%VERSION\%/mg, version);
			};
	}]);*/
});
