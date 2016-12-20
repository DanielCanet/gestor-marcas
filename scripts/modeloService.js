define([], function(){
	return function(app){
		
		"use strict";
		
		function Factory(){
			var atleta = {
				edad: 35
			}
			
			var setEdad = function(edad){
				atleta.edad = edad;
			}
			
			var getEdad = function(){
				return atleta.edad;
			}
			
			return {
				setEdad: setEdad,
				getEdad: getEdad
			}
		}	
	
		app.factory("modeloService", Factory);
	}

});