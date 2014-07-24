define([
	], function() {
	'use strict';
	var templateBase = 'app/js/templates/homeTmp/',
		moduleBase = 'module/home/',
		homeRoute = {
		'states' : {
			'home' : {
				url : '/',
				dependencies : [
					moduleBase+'directives/headerDir'
				],
				'views' : {
					'' : {
						templateUrl : templateBase+'home.html',
						//controller : 'homeCtrl',
						dependencies : [moduleBase+'controllers/homeCtrl']
					},
					'masterNav' : {
						dependencies : [moduleBase+'controllers/masterCtrl']
					},
					'header' : {
						templateUrl : templateBase+'header.html',
						//controller : 'headerCtrl',
						dependencies : [
							moduleBase+'controllers/headerCtrl',
							moduleBase+'services/headerSvc'
						]
					},
					'main' : {
						templateUrl : templateBase+'main.html',
						//controller : 'mainCtrl',
						dependencies : [moduleBase+'controllers/mainCtrl']
					},
					'footer' : {
						templateUrl : templateBase+'footer.html',
						//controller : 'footerCtrl',
						dependencies : [moduleBase+'controllers/footerCtrl']
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
	return homeRoute;
});