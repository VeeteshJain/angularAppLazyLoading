define([
	'app',
	'angular'
	], function (app,angular) {
	'use strict';
  /* header Services */
	app.factory('headerSvc',['$q','$http',function($q,$http){
		return {
			'getCategory' : function(){
				debugger;
				var reqHeader = {
					method: 'GET',
					url: 'serviceData/category/category.json'
				},
				deferred = $q.defer();

				deferred.notify('request going to start');

				$http(reqHeader).
				    success(function(data, status, headers, config) {
				    	debugger;
				    	deferred.resolve(data, status, headers, config);
				      // this callback will be called asynchronously
				      // when the response is available
				    }).
				    error(function(data, status, headers, config) {
				    	debugger;
				    	deferred.reject(data, status, headers, config);
				      // called asynchronously if an error occurs
				      // or server returns response with an error status.
				    });
				return deferred.promise;
			},
			'helloSvc' : function(config){
				return config+" this is hello Services";
			}
		}

		
	}]);
});
