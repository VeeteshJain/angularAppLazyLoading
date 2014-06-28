define([
	'myHome/myHomeRoute'
	], function(myHomeRoute) {
	'use strict';
	var allAppRoute = {};
	allAppRoute['myHomeRoute'] = myHomeRoute;
	return allAppRoute;
});