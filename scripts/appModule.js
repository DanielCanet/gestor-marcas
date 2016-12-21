define([
"angular",
"appController",
"appEdadDirective",
"modeloService",
"angular-material"
],function(
	angular, 
	appController, 
	appEdadDirective, 
	modeloService){

	var app = angular.module("appDemo", ['ngMaterial']);
	appController(app);
	appEdadDirective(app);
	modeloService(app);
	
	return app;
});