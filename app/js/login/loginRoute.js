define([
	], function() {
	'use strict';
	var loginRoute = {
		'state' : {
			'home.login' : {
				url : '/login',
				'views'	: {
					/*'' : {
						//templateUrl : 'app/js/home/templates/home.html'
					},
					'header' : {
						templateUrl : 'app/js/home/templates/header.html'
					},*/
					'main' : {
						templateUrl : 'app/js/login/templates/login.html'
					}/*,
					'footer' : {
						templateUrl : 'app/js/home/templates/footer.html'
					}*/
				}
			}
		}
	};
	return loginRoute;
});