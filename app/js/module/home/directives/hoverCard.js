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
	//app.$myProvide.get('$tooltipProvider').setTriggers( {openTrigger: closeTrigger} ) ;
	app.$myProvide.get('$tooltipProvider').options( {getTemplate:function(directiveName, startSym, endSym) {
      return '<div '+ directiveName +'-popup '+
            'title="'+startSym+'tt_title'+endSym+'" '+
            'content="'+startSym+'tt_content'+endSym+'" '+
            'placement="'+startSym+'tt_placement'+endSym+'" '+
            'animation="tt_animation" '+
            'is-open="tt_isOpen" '+
            'sso-forms="'+startSym+'tt_ssoForms'+endSym+'" '+
            'content-html="'+startSym+'tt_contentHtml'+endSym+'" '+
            'title-html="'+startSym+'tt_titleHtml'+endSym+'" '+
            '>'+
          '</div>';
    }} ) ;

  	/* Directives */
	app.directive('hovercard', [ '$tooltip', function($tooltip) {
		var hover = $tooltip( 'hovercard', 'hovercard', 'click' );
		debugger;
		hover.scope = {
			tt_ssoForms: '=ssoForms',
			tt_contentHtml: '=contentHtml',
			tt_titleHtml: '=titleHtml'
		};
		return hover;
	}]);

	app.directive('hovercardPopup', [ '$tooltip', function($tooltip) {
		function link($scope, element, attributes, controller){
			debugger;
			/*var contentHtml = '<p> content html </p>';
			$scope.content = 'contentHtml';*/
		}
		function controller( $scope, $element, $attrs ){
			debugger;
			/*var contentHtml = '<p> content html </p>';
			$scope.content = 'contentHtml';*/
		}
		return {
			restrict : 'EA',
			replace : true,
			link : link,
			controller : controller,
			//transclude : true,
			scope : {title: '@', content: '@', placement: '@', animation: '&', isOpen: '&', ssoForms: '@' , contentHtml:"@" , titleHtml:'@'},
			//templateUrl: 'template/popover/popover.html'
			template : '<div class="popover {{placement}}" ng-class="{ in: isOpen(), fade: animation() }"><div class="arrow"></div><div class="popover-inner">'+
			'<h3 class="popover-title" ng-show="title"><div bind-html-unsafe="titleHtml"></div></h3>'+
			'<p ng-bind="ssoForms">test</p>'+
			'<p>qwerty {{ssoForms}}</p>'+
			'<div class="popover-content"><div bind-html-unsafe="contentHtml"></div></div></div></div>'
		}
	}]);

	
	app.directive('popoverHtmlUnsafe', [ '$tooltip', function($tooltip) {
		var hover = $tooltip( 'popoverHtmlUnsafe', 'popoverHtmlUnsafe', 'click' );
		debugger;
/*		hover.scope = {
			tt_ssoForms: '=ssoForms',
			tt_contentHtml: '=contentHtml',
			tt_titleHtml: '=titleHtml'
		};*/
		return hover;
	}]);

	app.directive('popoverHtmlUnsafePopup', [ '$tooltip', function($tooltip) {
		function link($scope, element, attributes, controller){
			debugger;
			/*var contentHtml = '<p> content html </p>';
			$scope.content = 'contentHtml';*/
		}
		function controller( $scope, $element, $attrs ){
			debugger;
			/*var contentHtml = '<p> content html </p>';
			$scope.content = 'contentHtml';*/
		}
		return {
			restrict : 'EA',
			replace : true,
			link : link,
			controller : controller,
			//transclude : true,
			scope : {title: '@', content: '@', placement: '@', animation: '&', isOpen: '&', ssoForms: '@'},
			//templateUrl: 'template/popover/popover.html'
			template : '<div class="popover {{placement}}" ng-class="{ in: isOpen(), fade: animation() }"><div class="arrow"></div><div class="popover-inner">'+
			//'<h3 class="popover-title" ng-bind="title" ng-show="title"></h3>'+
			'<h3 class="popover-title" ng-show="title"><div bind-html-unsafe="title"></div></h3>'+
			'<div class="popover-content" ng-show="content"><div model-html-unsafe="content"></div></div>'+
			'</div></div>'
		}
	}]);

	app.directive('modelHtmlUnsafe', ['$compile', function($compile) {
		function link($scope, $element, $attributes, controller){
			debugger;
			$element.addClass('ng-binding').data('$binding', $attributes.modelHtmlUnsafe);
			$scope.$watch($attributes.modelHtmlUnsafe, function modelHtmlUnsafeWatchAction(value) {
				debugger;
				$element.html(value || '');
				$compile($element.contents())($scope);
			});
		}
		function controller($scope, $element, $attrs ){
			debugger;
		}
		return {
			restrict : 'EA',
			replace : true,
			link : link,
			controller : controller
		}
	}]);
});
