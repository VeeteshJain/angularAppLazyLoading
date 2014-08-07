define([
	'app',
	'angular',
	], function(app,angular) {
	'use strict';

	var openTrigger = function(){
		debugger;
	}

	var closeTrigger = function(){
		debugger;	
	}

	debugger;
	app.$myProvide.get('$tooltipProvider').setTriggers( {openTrigger: closeTrigger} ) ;

  	/* Directives */
	app.directive('hovercard', [ '$tooltip', function($tooltip) {
		var hover = $tooltip( 'hovercard', 'hovercard', 'click' );
		debugger;
		hover.scope = {tt_ssoForms: '=ssoForms'};
		return hover;
	}]);

	app.directive('hovercardPopup', [ '$tooltip', function($tooltip) {
		function link($scope, element, attributes, controller){
			debugger;
			var contentHtml = '<p> content html </p>';
			$scope.content = 'contentHtml';
		}
		function controller( $scope, $element, $attrs ){
			debugger;
			var contentHtml = '<p> content html </p>';
			$scope.content = 'contentHtml';
		}
		return {
			restrict : 'EA',
			replace : true,
			link : link,
			controller : controller,
			//transclude : true,
			scope : {title: '@', content: '@', placement: '@', animation: '&', isOpen: '&', ssoForms: '@' },
			//templateUrl: 'template/popover/popover.html'
			template : '<div class="popover {{placement}}" ng-class="{ in: isOpen(), fade: animation() }"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title" ng-bind="title" ng-show="title"></h3>'+
			'<p ng-bind="ssoForms">test</p>'+'<p>qwerty {{ssoForms}}</p>'
			+'<div class="popover-content" ng-bind="content"></div></div></div>'
		}
	}]);
});
