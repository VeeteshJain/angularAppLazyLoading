define([
	'app',
	'angular',
	], function(app,angular) {
	'use strict';

  	/* Directives */
	app.directive('headerDir', function() {
		function link(scope,element,attrs){
			scope.headers = scope.headerApi().getHeader();
			scope.add = function(){
				debugger;
				this.headerApi().addHeader({'api' : {
								'orderRight' : 4,
								'title' : 'api',
								'template' : '<p>api</p>',
								'templateUrl' : 'app/js/templates/common/header/api'
							}});
			}
		}
		return {
			link : link,
			transclude : true,
			scope : {
				headerApi : '&headerApi'
			},
			templateUrl : 'app/js/templates/common/directives/headerDir.html'
		}
	});
});
