define([
	'app',
	'angular'
	], function (app,angular) {
	'use strict';
	/* Controllers */
	app.controller('headerCtrl', ['$scope','$rootScope','headerSvc', function ($scope,$rootScope,headerSvc) {
		$scope.headerContent = 'This is my HEADER';
		$rootScope.pageState = 'home';
		$scope.buttonTest = 1;
		$scope.catData = 'TEST';
		$scope.mySso = '123';
		$scope.openHoverCard = true;
		$scope.$watch('mySso',function(newValue, oldValue, t_scope){
			console.log(t_scope.mySso);
		});
		$scope.getCat = function(){
			debugger;
			this.$parent.pageType = 'category page';
			var self = this;
			var promise = headerSvc.getCategory();
			promise.then(function(data, status, headers, config){
				//success
				debugger;
				self.catData = 'success';
			},function(data, status, headers, config){
				//fail
				debugger;
				self.catData = 'fail';
			},function(data, status, headers, config){
				//notify
				debugger;
				self.catData = 'notify';
			});
		};
	}]);
});