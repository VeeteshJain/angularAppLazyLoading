define([
	'app',
	'util/dependencyResolverFor',
	'common/commonRoute',
	'myHome/myHomeRoute',
	//'home/homeRoute',
	'module/home/homeRoute',
	'login/loginRoute'
	], function(app, dependencyResolverFor, commonRoute, myHomeRoute, homeRoute, loginRoute) {
	'use strict';
	var allAppRoute = {};
	//allAppRoute['myHomeRoute'] = myHomeRoute;
	//allAppRoute['commonRoute'] = commonRoute;

/*	app.controller
    app.directive
    app.filter
    app.factory
    app.service*/

	for(var commonModule in commonRoute) {
		for(var type in commonRoute[commonModule]){
/*			var promose = dependencyResolverFor(commonRoute[commonModule][type].dependencies);
			promose.then(function(){
				debugger;
				//app[type]();
			});*/
		}

	}
	allAppRoute['homeRoute'] = homeRoute;
	debugger;
	//allAppRoute['loginRoute'] = loginRoute;
	return allAppRoute;
});