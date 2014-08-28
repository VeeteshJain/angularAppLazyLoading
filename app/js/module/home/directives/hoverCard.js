define([
	'app',
	'angular',
	], function(app,angular) {
	'use strict';

	var openTrigger = function(){
		//debugger;
	}

	var closeTrigger = function(){
		//
	}
	//app.$myProvide.get('$tooltipProvider').setTriggers( {openTrigger: closeTrigger} ) ;
/*	app.$myProvide.get('$tooltipProvider').options( {getTemplate:function(directiveName, startSym, endSym) {
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
    }} ) ;*/

  	/* Directives */
	app.directive('hovercard', [ '$tooltip', function($tooltip) {
		var hover = $tooltip( 'hovercard', 'hovercard', 'click' );
		//debugger;
		hover.scope = {
			tt_ssoForms: '=ssoForms',
			tt_contentHtml: '=contentHtml',
			tt_titleHtml: '=titleHtml'
		};
		return hover;
	}]);

	app.directive('hovercardPopup', [ '$tooltip', function($tooltip) {
		function link($scope, element, attributes, controller){
			/*var contentHtml = '<p> content html </p>';
			$scope.content = 'contentHtml';*/
		}
		function controller( $scope, $element, $attrs ){
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
		hover.scope = {
			tt_ssoForms: '=ssoForms',
			tt_contentHtml: '=contentHtml',
			tt_titleHtml: '=titleHtml'
		};
		var compile = angular.copy(hover.compile);
		hover.compile = function(tElem, tAttrs){
			debugger;
			tAttrs.$observe('popoverHtmlUnsafeShow', function ( val ) {
              debugger;
            });
			return compile(tElem, tAttrs);
		}
		return hover;
	}]);

	app.directive('popoverHtmlUnsafePopup', [ '$tooltip', function($tooltip) {
		function link($scope, element, attributes, controller){
/*			$scope.$parent.$watch('tt_ssoForms', function(newVal, oldVal, t_scope) {
				debugger;
				t_scope.ssoForms = newVal;
			});*/
			$scope.$watch('title', function(newVal, oldVal, t_scope) {
				t_scope.title = newVal;
			});
			$scope.$watch('ssoForms', function(newVal, oldVal, t_scope){
				//debugger;
				t_scope.$parent.tt_ssoForms = newVal;
			});
			/*var contentHtml = '<p> content html </p>';
			$scope.content = 'contentHtml';*/
		}
		function controller( $scope, $element, $attrs ){
			/*var contentHtml = '<p> content html </p>';
			$scope.content = 'contentHtml';*/
		}
		return {
			restrict : 'EA',
			replace : true,
			link : link,
			controller : controller,
			//transclude : true,
			scope : {title: '@', content: '@', placement: '@', animation: '&', isOpen: '&', ssoForms: '=?tt_ssoForms'},
			//templateUrl: 'template/popover/popover.html'
			template : '<div class="popover {{placement}}" ng-class="{ in: isOpen(), fade: animation() }"><div class="arrow"></div><div class="popover-inner">'+
			'<h3 class="popover-title" ng-show="title"><div model-html-unsafe="title"></div></h3>'+
			'<div class="popover-content" ng-show="content"><div model-html-unsafe="content"></div></div>'+
			'<p>{{ssoForms}}</p>'+
			'<input ng-model="ssoForms" style="margin-top: 60px;">sso </input>'+
			'<input ng-model="title" style="margin-top: 60px;">title</input>'+
			'</div></div>'
		}
	}]);

	app.directive('modelHtmlUnsafe', ['$compile', function($compile) {
		function link($scope, $element, $attributes, controller){
			$scope.$watch($attributes.modelHtmlUnsafe, function modelHtmlUnsafeWatchAction(value) {
				//debugger;
				$element.html(value || '');
				$compile($element.contents())($scope);
			});
		}
		function controller($scope, $element, $attrs ){
			//controller
		}
		return {
			restrict : 'EA',
			replace : true,
			link : link,
			controller : controller
		}
	}]);
});
