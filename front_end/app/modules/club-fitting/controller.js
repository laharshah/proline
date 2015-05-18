/**
 * Controller for view tables page
 */

angular.module('prolineApp.club-fitting', []);

angular.module('prolineApp.club-fitting').config(['$routeProvider', function($routeProvider) {
				
		$routeProvider
			.when("/club-fitting", {
				controller: 'club-fittingController',
				templateUrl: 'modules/club-fitting/view.html',
			});
	}
]);

angular.module('prolineApp').controller('club-fittingController', function ($scope, $rootScope, $location, $cookieStore, authFactory) {
	
	$scope.pagename = "club-fitting";
	$scope.infolist=[
			{"heading":"Mizuno Shaft Optimizer", "contents":"this is details","leave":"button"},
			{"heading":"Ping nFlight", "contents":"this is details","leave":"button"},
			{"heading":"Flight Scope", "contents":"this is details","leave":"button"}
		];
});