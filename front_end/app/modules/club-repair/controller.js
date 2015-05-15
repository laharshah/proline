/**
 * Controller for view tables page
 */

angular.module('prolineApp.club-repair', []);

angular.module('prolineApp.club-repair').config(['$routeProvider', function($routeProvider) {
				
		$routeProvider
			.when("/club-repair", {
				controller: 'club-repairController',
				templateUrl: 'modules/club-repair/view.html',
			});
	}
]);

angular.module('prolineApp').controller('club-repairController', function ($scope, $rootScope, $location, $cookieStore, authFactory) {
	
	$scope.pagename = "club-repair";
	$scope.packages = [
		{
		feature1name:"one",feature2name:"two",feature3name:"three",feature4name:"four",feature1name:"one",
		feature1content:"one",feature2content:"two",feature3content:"three",feature4content:"four"
			
			
		},
		{	},
		{	}
	]
});