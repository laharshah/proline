/**
 * Controller for view tables page
 */

angular.module('prolineApp.simulators', []);

angular.module('prolineApp.simulators').config(['$routeProvider', function($routeProvider) {
				
		$routeProvider
			.when("/simulators", {
				controller: 'simulatorsController',
				templateUrl: 'modules/simulators/view.html',
			});
	}
]);

angular.module('prolineApp').controller('simulatorsController', function ($scope, $rootScope, $location, $cookieStore, authFactory) {
	
	$scope.pagename = "Simulators";
	
});