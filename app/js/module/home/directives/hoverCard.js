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
});
