define([
	], function() {
	'use strict';
	var homeRoute = {
		'states' : {
			'home' : {
				url : '/',
				'views' : {
					'' : {
						templateUrl : 'app/js/home/templates/home.html',
						//controller : 'homeCtrl',
						dependencies : ['home/controller/homeCtrl']
					},
					'header' : {
						templateUrl : 'app/js/home/templates/header.html',
						//controller : 'headerCtrl',
						dependencies : ['home/controller/headerCtrl','home/services/headerSvc']
					},
					'main' : {
						templateUrl : 'app/js/home/templates/main.html',
						//controller : 'mainCtrl',
						dependencies : ['home/controller/mainCtrl']
					},
					'footer' : {
						templateUrl : 'app/js/home/templates/footer.html',
						//controller : 'footerCtrl',
						dependencies : ['home/controller/footerCtrl']
					}
				}
			}/*,
			'home.login' : {
				url : '/login',
				'views'	: {
					'' : {
						//templateUrl : 'app/js/home/templates/home.html'
					},
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
			}*/
		}
	};
	var basePath = 'app/js/home';
	return homeRoute;
});