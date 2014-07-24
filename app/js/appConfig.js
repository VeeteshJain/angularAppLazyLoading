define([
	'angular',
	'app',
	'allAppRoute',
	'util/dependencyResolverFor'
	], function(angular, app,allAppRoute,dependencyResolverFor) {
	'use strict';
	debugger;
	return app.config(
	[
		'$routeProvider',
        '$locationProvider',
        '$controllerProvider',
        '$compileProvider',
        '$filterProvider',
        '$provide',
        '$injector',
        '$stateProvider',
        '$urlRouterProvider',
         function(
         	$routeProvider,
         	$locationProvider,
         	$controllerProvider,
         	$compileProvider,
         	$filterProvider,
         	$injector,
         	$provide,
         	$stateProvider,
         	$urlRouterProvider
         	) {
         	debugger;
			app.controller = $controllerProvider.register;
	        app.directive  = $compileProvider.directive;
	        app.filter     = $filterProvider.register;
	        //app.factory    = $provide.factory;
	        //app.factory    = $provide.factory;
	        app.factory    = $injector.factory;
	        app.service    = $injector.service;
	        app.$injector  = $injector;
	        app.$myProvide   = $provide;
	        //$urlRouterProvider.otherwise("/home");

	        for(var myAppRoute in allAppRoute){
	        	for(var state in allAppRoute[myAppRoute].states){
	        		var stateParam = {};
	        		angular.extend(stateParam,allAppRoute[myAppRoute]['states'][state]);
	        		stateParam.dependencies != undefined ? stateParam.resolve = dependencyResolverFor(stateParam.dependencies) : '';
	        		for(var view in stateParam.views){
	        			stateParam['views'][view].dependencies != undefined ? stateParam['views'][view].resolve = dependencyResolverFor(stateParam['views'][view].dependencies) : '';
	        		}
	        		$stateProvider['state'](state,stateParam);
	        	}
	        }
	        

            //$locationProvider.html5Mode(true);

/*			for(var myAppRoute in allAppRoute){
				for(var action in allAppRoute[myAppRoute].actions){
					for(var path in allAppRoute[myAppRoute]['actions'][action]){
						$routeProvider[action](path,{
							controller: allAppRoute[myAppRoute]['actions'][action][path].controller,
							template: allAppRoute[myAppRoute]['actions'][action][path].template,
							templateUrl: allAppRoute[myAppRoute]['actions'][action][path].templateUrl,
							redirectTo: allAppRoute[myAppRoute]['actions'][action][path].redirectTo,
							//resolve:dependencyResolverFor(allAppRoute[myAppRoute].dependencies)
							resolve:dependencyResolverFor(allAppRoute[myAppRoute]['actions'][action][path].dependencies)
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
			$routeProvider.otherwise({redirectTo: '/view1'});*/
		}
	]);
});