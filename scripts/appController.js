define([
],function(){

	return function (app){
		
		/*opcion 2*/
		
		function Controller(scope){
			scope.name = "gestor marcas";
		}
		
		app.controller("appController", Controller);
		Controller.$inject=["$scope"];
		
		/*
		opcion 1
		
		app.controller("appController", function($scope){
			$scope.name = "prueba controller";
		});
		*/
		
	}

});