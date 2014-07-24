define([
	'app',
	'angular', 
	'common/services/imgSvc'
	], function(app,angular) {
	'use strict';

  /* Directives */
	app.directive('imageDir', ['imgSvc', function(imgSvc) {
		return function(scope, elm, attrs) {
			elm.text('test');
		};
	}]);
});
