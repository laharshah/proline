/**
 * Initializing the Login Module for law admin
 * @type [angular module]
 */
angular.module('prolineApp.auth', []);

angular.module('prolineApp.auth').config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
		
		/**
		 * Allow cross domain request in JavaScript
		 */
		$httpProvider.defaults.useXDomain = true;
	  	delete $httpProvider.defaults.headers.common['X-Requested-With'];
		
		$routeProvider
			.when("/login-signup", {
				controller: 'authController',
				templateUrl: 'modules/auth/view.html',
			});
	}
]);


/**
 * Controller for login page
 */            	 	
angular.module('prolineApp.auth').controller('authController', function ($scope, $cookieStore, $location, $rootScope, $timeout, authFactory) {
	
	console.log("here");
	if($cookieStore.get('user') && $cookieStore.get('user').lname) {
		$location.path('/welcome');
	}	
	$scope.user = {};

	/** Process Login If All good  */
	$scope.doLogin = function (allGood) {
		if(allGood) {
			authFactory.processLogin($scope.user)
				.success(function (response, code) {
					$cookieStore.put("user", response.data);
					// // Store cookies and redirect to questions.
					console.log("1");
					$location.path("/welcome");
				})
				.error(function (response, code) {
					if(code === 401) {
						alert("Invalid credentials. Please try again.");
					} else if(response.success===false){
						console.log(response);
						console.log(code);
						alert(response.message);
					} else {
						alert("Erro while login");
					}
				});
		}
	};

	
});