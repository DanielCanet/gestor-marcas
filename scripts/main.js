define(["angular", "appModule"], function(angular, appModule){
	'use strict';
	console.log('arranque');

	angular.bootstrap($("#contenedor"),[appModule.name]);
});