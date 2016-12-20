define([
"text!tmp/edadTemplate.html"
], function(edadTemplate){

	return function (app){

		function Directive(){
			return {
				template: edadTemplate,
				scope: {
					ngModel: "="
				}
			}			
		}
		
		app.directive("edadAtleta", Directive);
		
	
	};

});