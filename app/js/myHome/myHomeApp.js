define([
	'angular',
	'myHome/filters/filters',
	'myHome/services/services',
	'myHome/directives/directives',
	'myHome/controllers/myHomeCtrl1',
	'myHome/controllers/myHomeCtrl2',
	'angularRoute',
	'app'
	], function (angular, filters, services, directives ,myHomeCtrl1 ,myHomeCtrl2 ,angularRoute,app){
		'use strict';

		// Declare app level module which depends on filters, and services
		debugger;
		app.controller('myHomeCtrl1', ['$scope', function($scope){
			$scope.scopedAppVersion = 'a test MY HOME CONTROLLER 1';
		}]);

/*		app.loadController.register('myHomeCtrl1', ['$scope', function($scope){
			$scope.scopedAppVersion = 'a test MY HOME CONTROLLER 1';
		}]);*/
		debugger;

/*		var myHomeApp = angular.module('myHomeApp', [
			'ngRoute',
			'myHomeApp.myHomeCtrl1',
			'myHomeApp.myHomeCtrl2',
			'myHomeApp.directives',
			'myHomeApp.filters',
			'myHomeApp.services'
			]);

		debugger;
		myHomeApp.config(['',function(){

		}]);*/

		//return myHomeApp;
});
