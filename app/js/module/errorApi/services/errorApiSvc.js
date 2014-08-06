define([
	'app',
	'angular'
	], function (app,angular) {
	'use strict';
  /* header Services */
	app.factory('errorHandlerSvc',['$q','$http',function($q,$http){
		return {
			'showError': function(){

			},
			'hideError': function(){

			},
			'errorTimeOutManager': function(){

			}
		}
	}]);
});
