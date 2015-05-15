/**
 * Controller for view tables page
 */

angular.module('prolineApp.product',[]);

angular.module('prolineApp.product').config(['$routeProvider', function($routeProvider) {
				
		$routeProvider
			.when("/product", {
				controller: 'productController',
				templateUrl: 'modules/product/view.html',
			});
	}
]);

angular.module('prolineApp').controller('productController', function ($scope, $rootScope, $location, $cookieStore, authFactory) {
	
	$scope.aboutus = "Serving the Chicagoland area for over 10 years, Proline is an authorized dealer of all the best known brands in golf including Taylormade, Titleist, Ping, and Mizuno. In addition, Proline specializes in offering high-quality boutique products from manufacturers like Bettinardi, Miura, Fourteen, and more. Our goal is to offer the full array of high-end equipment and customization available in the golf industry beyond what you normally find in traditional 'big-box' retailers.";
	$scope.pagename="product";
});