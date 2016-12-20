define([
],function(){

	return function (app){
		
		/*opcion 2*/
		
		function Controller(scope){
			
			vm=this;
			
			vm.name = "gestor marcas prueba";
			
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