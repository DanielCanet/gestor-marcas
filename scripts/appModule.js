define([
"angular",
"angular-material",
"appController"
],function(angular, ngMaterial, appController){
	var app = angular.module("appDemo", ['ngMaterial']);
	appController(app);
	
	return app;
});