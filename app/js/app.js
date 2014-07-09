define([
	'angular',
	'filters',
	'services',
	'directives',
	'controllers',
	'angularRoute',
	'ui.router',
	'ui.bootstrap'
	], function (angular, uiRouter, filters, services, directives, controllers) {
		'use strict';

		// Declare app level module which depends on filters, and services

		return angular.module('myApp', [
			'ngRoute',
			'ui.router',
			'myApp.controllers',
			'myApp.filters',
			'myApp.services',
			'myApp.directives'
		]);

});
