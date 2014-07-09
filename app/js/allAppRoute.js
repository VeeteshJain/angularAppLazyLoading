define([
	'myHome/myHomeRoute',
	'home/homeRoute'
	], function(myHomeRoute,homeRoute) {
	'use strict';
	var allAppRoute = {};
	//allAppRoute['myHomeRoute'] = myHomeRoute;
	allAppRoute['homeRoute'] = homeRoute;
	return allAppRoute;
});