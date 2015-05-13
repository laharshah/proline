/**
 * Controller for view tables page
 */

angular.module('prolineApp.instruction', []);

angular.module('prolineApp.instruction').config(['$routeProvider', function($routeProvider) {
				
		$routeProvider
			.when("/instruction", {
				controller: 'instructionController',
				templateUrl: 'modules/instruction/view.html',
			});
	}
]);

angular.module('prolineApp').controller('instructionController', function ($scope, $rootScope, $location, $cookieStore, authFactory) {
	
	$scope.pagename = "instruction";
});