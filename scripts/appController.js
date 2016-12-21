define([
],function(){

	return function (app){
		
		/*opcion 2*/

		
		function Controller(scope, modeloService){
			
			vm=this;
			
			scope.name = "gestor marcas prueba";

			(function(){
				scope.edad = modeloService.getEdad();
			})();
			
		}
		
		app.controller("appController", Controller);
		Controller.$inject=["$scope", "modeloService"];
		
		/*
		opcion 1
		
		app.controller("appController", function($scope){
			$scope.name = "prueba controller";
		});
		*/
		
	}

});