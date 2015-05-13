/**
 * Controller for view tables page
 */
angular.module('prolineApp').controller('rootController', function ($scope, $window, $cookieStore, $rootScope, $location, $route, authFactory) {
	
	$rootScope.title = "Chicagoland's Premier Golf Shop & Club Fitter | Proline Golf Chicago";
	
	$scope.user = {};
	
	console.log($route);


	$rootScope.logout = function () {
		
		$cookieStore.put('user',[]);

		$window.history.pushState(null, null, location.href);

        $window.onpopstate = function() {
            history.go(1);
        };
		
		location.href="https://eluck-laharshah.c9.io/eluck/front_end/app/";
	};


});

