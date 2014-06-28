define([
	'app',
	'angular',
	'myHome/services/services'
	], function (app,angular) {
	'use strict';

	/* Controllers */
	app.controller('myHomeCtrl2', ['$scope', '$injector', function($scope, $injector) {
		require(['myHome/controllers/myctrl2'], function(myctrl2) {
			// injector method takes an array of modules as the first argument
			// if you want your controller to be able to use components from
			// any of your other modules, make sure you include it together with 'ng'
			// Furthermore we need to pass on the $scope as it's unique to this controller
			$injector.invoke(myctrl2, this, {'$scope': $scope});
		});
	}]);

/*	return angular.module('myHomeApp.myHomeCtrl2', ['myHomeApp.services'])
		// More involved example where controller is required from an external file
		.controller('myHomeCtrl2', ['$scope', '$injector', function($scope, $injector) {
			require(['myHome/controllers/myctrl2'], function(myctrl2) {
				// injector method takes an array of modules as the first argument
				// if you want your controller to be able to use components from
				// any of your other modules, make sure you include it together with 'ng'
				// Furthermore we need to pass on the $scope as it's unique to this controller
				$injector.invoke(myctrl2, this, {'$scope': $scope});
			});
		}]);*/
});