/**
 * Controller for view tables page
 */

angular.module('prolineApp.corporate-sales', []);

angular.module('prolineApp.corporate-sales').config(['$routeProvider', function($routeProvider) {
				
		$routeProvider
			.when("/corporate-sales", {
				controller: 'corporate-salesController',
				templateUrl: 'modules/corporate-sales/view.html',
			});
	}
]);

angular.module('prolineApp').controller('corporate-salesController', function ($scope, $rootScope, $location, $cookieStore, authFactory) {
	
	$scope.pagename = "corporate-sales";
});