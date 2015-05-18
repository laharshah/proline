/**
 * Controller for view tables page
 */
angular.module('prolineApp').controller('rootController', function ($scope, $window, $rootScope, $location, $route, authFactory) {
	
	$rootScope.title = "Chicagoland's Premier Golf Shop & Club Fitter | Proline Golf Chicago";
	
	$scope.user = {};
	
	$scope.isCollapsed = false;
	
$scope.isActive = function(route){
    return route === $location.path();
  }	


});

