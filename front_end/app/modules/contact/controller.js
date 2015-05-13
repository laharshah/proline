/**
 * Controller for view tables page
 */

angular.module('prolineApp.contact', []);

angular.module('prolineApp.contact').config(['$routeProvider', function($routeProvider) {
				
		$routeProvider
			.when("/contact", {
				controller: 'contactController',
				templateUrl: 'modules/contact/view.html',
			});
	}
]);

angular.module('prolineApp').controller('contactController', function ($scope, $rootScope, $location, $cookieStore, authFactory) {
	
	$scope.pagename = "contact";
});