define([
	'angular',
	'angularRoute',
	'ui.router',
	'ui.bootstrap',
	'filters',
	'services',
	'directives',
	'controllers'
	], function (angular, angularRoute, uiRouter, uiBootstrap, filters, services, directives, controllers) {
		'use strict';

		// Declare app level module which depends on filters, and services
		return angular.module('myApp', [
			'ngRoute',
			'ui.router',
			'ui.bootstrap',
			'myApp.controllers',
			'myApp.filters',
			'myApp.services',
			'myApp.directives'
		]);

});
