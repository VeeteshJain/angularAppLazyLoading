define([
	'app',
	'angular'
	], function (app,angular) {
	'use strict';

	/* Controllers */
	app.controller('footerCtrl', ['$scope', function ($scope) {
		$scope.footerContent = 'This is my FOOTER';
		$scope.addFooter = function(){
			debugger;
			this.footerApi.addFooter({'apiAAA' : {
				'orderRight' : 4,
				'title' : 'apiAAA',
				'template' : '<p>apiAAA</p>',
				'templateUrl' : 'app/js/templates/common/header/apiAAA'
			}});
		}
	}]);
});