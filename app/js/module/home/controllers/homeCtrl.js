define([
	'app',
	'angular'
	], function (app,angular) {
	'use strict';

	/* Controllers */
	app.controller('homeCtrl', ['$scope', function ($scope) {
		$scope.homeContent = 'This is my HOME';
		$scope.categoryAccordionOpts = {
			'order' : 'order',
			'status' : {
				'isOpen' : false,
				'allOpen': false
			},
			'categorys' : [{
				'categoryLink' : 'phone',
				'order' : 1,
				'values' : ['nokia','samsung','apple','micromax'],
				'openStatus' : null
			},{
				'categoryLink' : 'electronics',
				'order' : 2,
				'values' : ['samsung','lg','sony'],
				'openStatus' : null
			},{
				'categoryLink' : 'computer',
				'order' : 3,
				'values' : ['HP','compaq','asus','apple'],
				'openStatus' : null
			}]
		};
		/*$scope.$watch('categoryAccordionOpts.status.isOpen',function(isOpen){
			isOpen = !isOpen;
		});*/
	}]);
});