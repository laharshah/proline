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
});