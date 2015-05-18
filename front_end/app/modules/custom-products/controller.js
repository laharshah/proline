/**
 * Controller for view tables page
 */

angular.module('prolineApp.CustomProducts', []);

angular.module('prolineApp.CustomProducts').config(['$routeProvider', function($routeProvider) {
				
		$routeProvider
			.when("/corporate-sales", {
				controller: 'CustomProductsController',
				templateUrl: 'modules/custom-products/view.html',
			});
	}
]);

angular.module('prolineApp').controller('CustomProductsController', function ($scope, $rootScope, $location, $cookieStore, authFactory) {
	
	$scope.pagename = "corporate-sales";
});