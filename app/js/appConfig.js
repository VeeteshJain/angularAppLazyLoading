define([
	'angular',
	'app',
	'allAppRoute',
	'util/dependencyResolverFor'
	], function(angular, app,allAppRoute,dependencyResolverFor) {
	'use strict';
	return app.config(
	[
		'$routeProvider',
        '$locationProvider',
        '$controllerProvider',
        '$compileProvider',
        '$filterProvider',
        '$provide',
         function($routeProvider, $locationProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {
			app.controller = $controllerProvider.register;
	        app.directive  = $compileProvider.directive;
	        app.filter     = $filterProvider.register;
	        app.factory    = $provide.factory;
	        app.service    = $provide.service;

            //$locationProvider.html5Mode(true);
            debugger;
			for(var myAppRoute in allAppRoute){
				for(var action in allAppRoute[myAppRoute].actions){
					for(var path in allAppRoute[myAppRoute]['actions'][action]){
						$routeProvider[action](path,{
							controller: allAppRoute[myAppRoute]['actions'][action][path].controller,
							template: allAppRoute[myAppRoute]['actions'][action][path].template,
							templateUrl: allAppRoute[myAppRoute]['actions'][action][path].templateUrl,
							redirectTo: allAppRoute[myAppRoute]['actions'][action][path].redirectTo,
							resolve:dependencyResolverFor(allAppRoute[myAppRoute].dependencies,app)
						});
					}
				}
			}
			$routeProvider.when('/view1', {
				templateUrl: 'app/partials/partial1.html',
				controller: 'MyCtrl1'
			});
			$routeProvider.when('/view2', {
				templateUrl: 'app/partials/partial2.html',
				controller: 'MyCtrl2'
			});
			$routeProvider.otherwise({redirectTo: '/view1'});
		}
	]);
});