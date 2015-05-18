angular.module('prolineApp', [
		'ngRoute',
		'ngAnimate',
		'ngCookies',
		'ui.bootstrap',
		'xeditable',
		'slick',
		'ap.lateralSlideMenu',
		'prolineApp.auth',
		'prolineApp.welcome',
		'prolineApp.ClubFitting',
		'prolineApp.ClubRepair',
		'prolineApp.contact',
		'prolineApp.CustomProducts',
		'prolineApp.instructors',
		'prolineApp.product'
		
	]);


angular.module('prolineApp').config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	
	$locationProvider.hashPrefix('!');

	$routeProvider.when('/', {
		controller:'homeController',
		templateUrl:'modules/home/view.html'
	})
	.otherwise("/");

}]);

angular.module('prolineApp').run(function(editableOptions){
	editableOptions.theme = 'bs3';
});