/**
 * Controller for view tables page
 */

angular.module('prolineApp.ClubFitting', []);

angular.module('prolineApp.ClubFitting').config(['$routeProvider', function($routeProvider) {
				
		$routeProvider
			.when("/club-fitting", {
				controller: 'ClubFittingController',
				templateUrl: 'modules/club-fitting/view.html',
			});
	}
]);

angular.module('prolineApp').controller('ClubFittingController', function ($scope, $rootScope, $location, $cookieStore, authFactory) {
	
	$scope.pagename = "club-fitting";
	$scope.infolist=[
			{"heading":"Mizuno Shaft Optimizer", "contents":"this is details","leave":"button"},
			{"heading":"Ping nFlight", "contents":"this is details","leave":"button"},
			{"heading":"Flight Scope", "contents":"this is details","leave":"button"}
		];
	$scope.		
});