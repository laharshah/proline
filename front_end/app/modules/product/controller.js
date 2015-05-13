/**
 * Controller for view tables page
 */

angular.module('prolineApp.product', []);

angular.module('prolineApp.product').config(['$routeProvider', function($routeProvider) {
				
		$routeProvider
			.when("/product", {
				controller: 'productController',
				templateUrl: 'modules/product/view.html',
			});
	}
]);

angular.module('prolineApp').controller('productController', function ($scope, $rootScope, $location, $cookieStore, authFactory) {
	
	$scope.pagename = "product";
});