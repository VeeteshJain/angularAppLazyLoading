define([
	'app',
	'angular',
	], function(app,angular) {
	'use strict';

  	/* Directives */
	app.directive('footerDir', function() {
		function link(scope,element,attrs){
			scope.footers = scope.footerApi().getFooter();
			scope.add = function(){
				debugger;
				this.footerApi().addFooter({'footerTwo' : {
								'orderRight' : 1,
								'title' : 'footer',
								'template' : '<p>footer</p>',
								'templateUrl' : 'app/js/templates/common/footer/api'
							}});
			}
		}
		return {
			link : link,
			transclude : true,
			scope : {
				footerApi : '&footerApi'
			},
			templateUrl : 'app/js/templates/common/directives/footerDir.html'
		}
	});
});
