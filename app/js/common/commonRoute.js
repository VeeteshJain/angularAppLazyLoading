define([
	], function() {
	'use strict';
	var commonRoute = {
/*		'img' : {
			'directive' : {dependencies : ['common/img/directives/imgDir']},
			'services' : {dependencies : ['common/img/services/imgSvc']}
		},*/
		'interceptor' : {
			'services' : {dependencies : ['common/interceptor/services/interceptorSvc']}
		}
	};
	return commonRoute;
});