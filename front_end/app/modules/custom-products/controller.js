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
  							name:'Logo Golf Balls',
  							about:'Details here of p1',
  							imgpath: 'https://proline-laharshah.c9.io/front_end/app/assets/images/custom-products/large_thumb_logo_balls.jpg',
  						  	custom_p_id:'custom_p_1'
              			},
              			
              			{
  							name:'Tournament Accessories',
  							about:'Details here of p2',
  							imgpath: 'https://proline-laharshah.c9.io/front_end/app/assets/images/custom-products/large_thumb_miniature-golf-bag-extralarge.jpg',
  						  	custom_p_id:'custom_p_2'
              			},
              			
              			{
  							name:'Logo on Apperal',
  							about:'Details here of p3',
  							imgpath: 'https://proline-laharshah.c9.io/front_end/app/assets/images/custom-products/large_thumb_CIMG09383.jpg',
  						  	custom_p_id:'custom_p_3'
              			},
              			
              			{
  							name:'Logo on Bags',
  							about:'Details here of p4',
  							imgpath: 'https://proline-laharshah.c9.io/front_end/app/assets/images/custom-products/large_thumb_scotland-golf-gear-extralarge.jpg',
  						  	custom_p_id:'custom_p_4'
              			}];
	
	
});