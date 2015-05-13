/**
 * Controller for view tables page
 */

angular.module('prolineApp.welcome', []);

angular.module('prolineApp.welcome').config(['$routeProvider', function($routeProvider) {
				
		$routeProvider
			.when("/welcome", {
				controller: 'welcomeController',
				templateUrl: 'modules/welcome/view.html',
			});
	}
]);

angular.module('prolineApp').controller('welcomeController', function ($scope, $rootScope, $location, $cookieStore, authFactory) {
	
	console.log($cookieStore.get('user'));
	
	if(!$cookieStore.get('user') && !$cookieStore.get('user').lname) {    //you cant check like this...
		$location.path('/');
	}
	
	$rootScope.user = $cookieStore.get('user');
	$scope.user = $cookieStore.get('user');

});