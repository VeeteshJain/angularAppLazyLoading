define([
	], function() {
	'use strict';
	var loginRoute = {
		'state' : {
			'login' : {
				url : '/login',
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
			}
		}
		}
	};
	return loginRoute;
});