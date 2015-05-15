/**
 * Controller for view tables page
 */

angular.module('prolineApp.custom-products', []);

angular.module('prolineApp.custom-products').config(['$routeProvider', function($routeProvider) {
				
		$routeProvider
			.when("/corporate-sales", {
				controller: 'custom-productsController',
				templateUrl: 'modules/custom-products/view.html',
			});
	}
]);

angular.module('prolineApp').controller('custom-productsController', function ($scope, $rootScope, $location, $cookieStore, authFactory) {
	
	$scope.pagename = "corporate-sales";
});