define([
	], function() {
	'use strict';
	var myHomeRoute = {
		'dependencies' : [],
		'actions' : {
			'when' : {
				'/MY view 1':{},
				'/MY view 2':{},
				'/test':{}
			},
			'otherwise':{
				'redirectTo':{}
			}
		}
	};
	var basePath = 'app/js/myHome';
	myHomeRoute.dependencies.push('myHome/filters/filters');
	myHomeRoute.dependencies.push('myHome/services/services');
	myHomeRoute.dependencies.push('myHome/directives/directives');
	myHomeRoute.dependencies.push('myHome/controllers/myHomeCtrl1');
	myHomeRoute.dependencies.push('myHome/controllers/myHomeCtrl2');

	//myHomeRoute.dependencies.push('myHome/myHomeApp');

	myHomeRoute.actions.when['/MY view 1'].controller = 'myHomeCtrl1';
	myHomeRoute.actions.when['/MY view 1'].templateUrl = basePath+'/templates/partial1.html';

	myHomeRoute.actions.when['/MY view 2'].controller = 'myHomeCtrl2';
	myHomeRoute.actions.when['/MY view 2'].templateUrl = basePath+'/templates/partial2.html';

	myHomeRoute.actions.when['/test'].template = '<p>HELLO WORLD</p>';

	//myHomeRoute.otherwise['redirectTo'] = '/MY view 1';

	return myHomeRoute;
});