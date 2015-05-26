/**
 * Controller for view tables page
 */

angular.module('prolineApp.CustomProducts', []);

angular.module('prolineApp.CustomProducts').config(['$routeProvider', function($routeProvider) {
				
		$routeProvider
			.when("/custom-products", {
				controller: 'CustomProductsController',
				templateUrl: 'modules/custom-products/view.html',
			});
	}
]);

angular.module('prolineApp').controller('CustomProductsController', function ($scope, $rootScope, $location, $cookieStore, authFactory) {
	
	$scope.pagename = "corporate-sales";
	
	$scope.customproducts = [
  						{
  							name:'Custom Balls',
  							about:'Details here of p1',
  							imgpath: 'assets/images/custom-products/large_thumb_logo_balls.jpg',
  						  	custom_p_id:'custom_p_1'
              			},
              			
              			{
  							name:'Custom Bags',
  							about:'Details here of p2',
  							imgpath: 'assets/images/custom-products/large_thumb_miniature-golf-bag-extralarge.jpg',
  						  	custom_p_id:'custom_p_2'
              			},
              			
              			{
  							name:'Custom Apparel',
  							about:'Details here of p3',
  							imgpath: 'assets/images/custom-products/large_thumb_CIMG09383.jpg',
  						  	custom_p_id:'custom_p_3'
              			},
              			
              			{
  							name:'Custom Accessories',
  							about:'Details here of p4',
  							imgpath: 'assets/images/custom-products/large_thumb_scotland-golf-gear-extralarge.jpg',
  						  	custom_p_id:'custom_p_4'
              			}];
	
	
});