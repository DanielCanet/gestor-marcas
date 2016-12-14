requirejs.config({
    baseUrl: 'scripts',
    paths: {
		'jquery' : '../node_modules/jquery/dist/jquery',
		'angular' : '../node_modules/angular/angular',
		'angular-material' : '../node_modules/angular-material/angular-material',
		'angular-animate' : '../node_modules/angular-animate/angular-animate',
		'angular-aria' : '../node_modules/angular-aria/angular-aria'
    },
    shim: {
		'angular': {
			deps: ['jquery'],
			exports: 'angular'
		},	
		'angular-material': {
			deps: ['angular-animate', 'angular-aria'],
			exports: 'ngMaterial'
		},			
		'angular-animate': {
			deps: ['angular'],			
			exports: 'ngAnimate'
		},	
		'angular-aria': {
			deps: ['angular'],			
			exports: 'ngAria'
		}		
    }

});

// Start loading the main app file
requirejs(['main']);