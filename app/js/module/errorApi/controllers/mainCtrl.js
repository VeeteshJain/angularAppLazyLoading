define([
	'app',
	'angular'
	], function (app,angular) {
	'use strict';
	/* Controllers */
	app.controller('mainCtrl', ['$scope','$rootScope', function ($scope,$rootScope) {
		/*header API*/
		$scope.headerApi = {};
		$scope.headerApi.header = {
			'profile' : {
				'orderRight' : 1,
				'title' : 'Profile',
				'template' : '<p>Profile</p>',
				'templateUrl' : 'app/js/templates/common/header/profile'
			},
			'home' : {
				'orderRight' : 2,
				'title' : 'Home',
				'template' : '<p>Home</p>',
				'templateUrl' : 'app/js/templates/common/header/home'
			},
			'category' : {
				'orderRight' : 3,
				'title' : 'category',
				'template' : '<p>category</p>',
				'templateUrl' : 'app/js/templates/common/header/category'
			}
		};
		$scope.headerApi.getHeader = function(){
			return $scope.headerApi.header;
		}
		$scope.headerApi.addHeader = function(option){
			return angular.extend($scope.headerApi.header, option);
		}
		$scope.headerApi.deleteHeader = function(option){
			return delete $scope.headerApi.header[option];
		}
		/*footer API*/
		$scope.footerApi = {};
		$scope.footerApi.footer = {
			'footer' : {
				'orderRight' : 1,
				'title' : 'footer',
				'template' : '<p>footer</p>',
				'templateUrl' : 'app/js/templates/common/footer/footer'
			},
			'footerOne' : {
				'orderRight' : 2,
				'title' : 'footer',
				'template' : '<p>footer</p>',
				'templateUrl' : 'app/js/templates/common/footer/footer'
			}
		};
		$scope.footerApi.getFooter = function(){
			return $scope.footerApi.footer;
		}
		$scope.footerApi.addFooter = function(option){
			return angular.extend($scope.footerApi.footer, option);
		}
		$scope.footerApi.deleteFooter = function(option){
			return delete $scope.footerApi.footer[option];
		}

		/*error API*/
		$scope.errorApi = [];
		$scope.errorApi.push({'type':'danger','msg':'test an alert'});
		debugger;
	}]);
});