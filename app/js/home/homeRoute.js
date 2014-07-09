define([
	], function() {
	'use strict';
	var homeRoute = {
		'state' : {
			'home' : {
				url : '/',
				'views' : {
					'header' : {
						templateUrl : 'app/js/home/templates/header.html'
					},
					'main' : {
						templateUrl : 'app/js/home/templates/home.html'
					},
					'footer' : {
						templateUrl : 'app/js/home/templates/footer.html'
					}
				}
			},
			'home.login' : {
				url : '/login',
				'views'	: {
					'header' : {
						templateUrl : 'app/js/home/templates/header.html'
					},
					'main' : {
						templateUrl : 'app/js/home/templates/login.html'
					},
					'footer' : {
						templateUrl : 'app/js/home/templates/footer.html'
					}
				}
			}
		}
	};
	var basePath = 'app/js/home';
	return homeRoute;
});