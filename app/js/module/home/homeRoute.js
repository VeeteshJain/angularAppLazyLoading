define([
	], function() {
	'use strict';
	var templateBase = 'app/js/templates/home/',
		moduleBase = 'module/home/',
		homeRoute = {
		'states' : {
			'main' : {
				url : '/',
				templateUrl : templateBase+'main.html',
				//controller : 'homeCtrl',
				dependencies : [
					moduleBase+'controllers/mainCtrl'
				]
			},
			'main.home' : {
				url : '^/home',
				'views' : {
					/*'' : {
						templateUrl : templateBase+'home.html',
						//controller : 'homeCtrl',
						dependencies : [moduleBase+'controllers/homeCtrl']
					},*/
					'header' : {
						templateUrl : templateBase+'header.html',
						//controller : 'headerCtrl',
						dependencies : [
							moduleBase+'controllers/headerCtrl',
							moduleBase+'directives/headerDir',
							moduleBase+'services/headerSvc'
						]
					},
					'footer' : {
						templateUrl : templateBase+'footer.html',
						//controller : 'footerCtrl',
						dependencies : [
							moduleBase+'controllers/footerCtrl',
							moduleBase+'directives/footerDir'
						]
					},
					'mainView' : {
						templateUrl : templateBase+'home.html',
						//controller : 'homeCtrl',
						dependencies : [
							moduleBase+'controllers/homeCtrl'
							//moduleBase+'controllers/homeDir',
						]
					}
				}
			}
		}
	};
	return homeRoute;
});