require.config({
	paths: {
		angular: '../../bower_components/angular/angular',
		angularRoute: '../../bower_components/angular-route/angular-route',
		angularMocks: '../../bower_components/angular-mocks/angular-mocks',
		text: '../../bower_components/requirejs-text/text',
		jquery: '../../bower_components/jquery/dist/jquery',
		//'ui.bootstrap': '../../bower_components/angular-bootstrap/ui-bootstrap',
		'ui.bootstrap': '../../bower_components/angular-bootstrap/ui-bootstrap-tpls',
		'ui.router': '../../bower_components/angular-ui-router/release/angular-ui-router',
		'ngSanitize': '../../bower_components/angular-sanitize/angular-sanitize'
	},
	shim: {
		'angular' : {'exports' : 'angular',deps: ['jquery']},
		'angularRoute': ['angular'],
		'angularMocks': {
			deps:['angular'],
			'exports':'angular.mock'
		},
		'ui.bootstrap' : {
			deps:['angular']
		},
		'ui.router' : {
			deps:['angular']
		},
		'ngSanitize' : {
			deps : ['angular']
		}
	},
	priority: [
		"angular"
	]
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = "NG_DEFER_BOOTSTRAP!";

require( [
	'angular',
	'app',
	'appConfig'
], function(angular, app, appConfig) {
	'use strict';
	var $html = angular.element(document.getElementsByTagName('html')[0]);
	angular.element().ready(function() {
		angular.resumeBootstrap([app['name']]);
	});
});