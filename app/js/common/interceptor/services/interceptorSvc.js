define([
	'app',
	'angular'
	], function (angular) {
	'use strict';
	
  	/* interceptor Services */
  	debugger;
	app.$provide.factory('interceptorSvc',['$q',function($q){
		return {
			'request' : function(config){
				debugger;
				return config;
			},
			'requestError' : function(rejection){
				debugger;
				return $q.reject(rejection);
			},
			'response' : function(response){
				debugger;
				return response;
			},
			'responseError' : function(rejection){
				debugger;
				return $q.reject(rejection);
			}
		}
	}]);
  	app.$injector.get('$httpProvider').interceptor.push('interceptorSvc');
});
