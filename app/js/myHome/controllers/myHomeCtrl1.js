define([
	'app',
	'angular',
	'myHome/services/services'
	], function (app,angular) {
	'use strict';

	/* Controllers */
	app.controller('myHomeCtrl1', ['$scope', 'version', function ($scope, version) {
		$scope.scopedAppVersion = version;
		//$scope.scopedAppVersion = 'this is test version';
	}]);

	app.controller('qwerty', ['$scope', function($scope){
		$scope.scopedAppVersion = 'a test app version';
	}]);
});