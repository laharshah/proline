angular.module('prolineApp', [
		'ngRoute',
		'ngAnimate',
		'ngCookies',
		'ui.bootstrap',
		'xeditable',
		'prolineApp.auth',
		'prolineApp.welcome',
		'prolineApp.club-fitting',
		'prolineApp.club-repair',
		'prolineApp.contact',
		'prolineApp.corporate-sales',
		'prolineApp.instruction',
		'prolineApp.product'
	]);

angular.module('prolineApp').config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	
	$locationProvider.hashPrefix('!');

	$routeProvider.when('/', {
		controller:'homeController',
		templateUrl:'modules/home/view.html'
	})
	.otherwise("/");

}]);

angular.module('prolineApp').run(function(editableOptions){
	editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});

angular.module('prolineApp').controller('rootController', ['$rootScope', function($rootScope){
	$rootScope.bodyClass = 'login-page';
}]);;;angular.module('prolineApp').controller('rootController', function ($scope, $window, $cookieStore, $rootScope, $location, $route, authFactory) {
	
	$rootScope.title = "Chicagoland's Premier Golf Shop & Club Fitter | Proline Golf Chicago";
	
	$scope.user = {};

});

;angular.module('prolineApp.auth', []);

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

	
});;angular.module('prolineApp.auth').factory('authFactory', ['$http', function ($http) {
		
		/**
		 * Blank authFactory
		 * @type {Object}
		 */
		var authFactory = {};

		// var apiUrl = 'http://localhost:8080/eluck/api/index.php/v1/';

		var apiUrl = 'https://eluck-laharshah.c9.io/eluck/api/index.php/v1/';

		authFactory.processLogin = function (user) {
			
			console.log("model");
			return $http.post(apiUrl + 'login', user);
		};
		
		authFactory.validateSecurityCode = function (code) {
			return $http.post(apiUrl + 'verifyCode', {scode:code});
		};

		return authFactory;
	}]);;angular.module('prolineApp.club-fitting', []);

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
});;angular.module('prolineApp.club-fitting').factory('club-fittingFactory', ['$http', function ($http) {
		
		/**
		 * Blank authFactory
		 * @type {Object}
		 */
		var authFactory = {};

		return authFactory;
	}]);;angular.module('prolineApp.club-repair', []);

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
});;angular.module('prolineApp.club-repair').factory('club-repairFactory', ['$http', function ($http) {
		
		/**
		 * Blank authFactory
		 * @type {Object}
		 */
		var authFactory = {};

		return authFactory;
	}]);;angular.module('prolineApp.contact', []);

angular.module('prolineApp.contact').config(['$routeProvider', function($routeProvider) {
				
		$routeProvider
			.when("/contact", {
				controller: 'contactController',
				templateUrl: 'modules/contact/view.html',
			});
	}
]);

angular.module('prolineApp').controller('contactController', function ($scope, $rootScope, $location, $cookieStore, authFactory) {
	
	$scope.pagename = "contact";
});;angular.module('prolineApp.contact').factory('contactFactory', ['$http', function ($http) {
		
		/**
		 * Blank authFactory
		 * @type {Object}
		 */
		var authFactory = {};

		return authFactory;
	}]);;angular.module('prolineApp.corporate-sales', []);

angular.module('prolineApp.corporate-sales').config(['$routeProvider', function($routeProvider) {
				
		$routeProvider
			.when("/corporate-sales", {
				controller: 'corporate-salesController',
				templateUrl: 'modules/corporate-sales/view.html',
			});
	}
]);

angular.module('prolineApp').controller('corporate-salesController', function ($scope, $rootScope, $location, $cookieStore, authFactory) {
	
	$scope.pagename = "corporate-sales";
});;angular.module('prolineApp.corporate-sales').factory('corporate-salesFactory', ['$http', function ($http) {
		
		/**
		 * Blank authFactory
		 * @type {Object}
		 */
		var authFactory = {};

		return authFactory;
	}]);;angular.module('prolineApp').controller('homeController', function ($scope, $location, authFactory) {
	
	
});;;angular.module('prolineApp.instruction', []);

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
});;angular.module('prolineApp.instruction').factory('instructionFactory', ['$http', function ($http) {
		
		/**
		 * Blank authFactory
		 * @type {Object}
		 */
		var authFactory = {};

		return authFactory;
	}]);;angular.module('prolineApp.product', []);

angular.module('prolineApp.product').config(['$routeProvider', function($routeProvider) {
				
		$routeProvider
			.when("/product", {
				controller: 'productController',
				templateUrl: 'modules/product/view.html',
			});
	}
]);

angular.module('prolineApp').controller('productController', function ($scope, $rootScope, $location, $cookieStore, authFactory) {
	
	$scope.pagename = "product";
});;angular.module('prolineApp.product').factory('productFactory', ['$http', function ($http) {
		
		/**
		 * Blank authFactory
		 * @type {Object}
		 */
		var authFactory = {};

		return authFactory;
	}]);;angular.module('prolineApp.welcome', []);

angular.module('prolineApp.welcome').config(['$routeProvider', function($routeProvider) {
				
		$routeProvider
			.when("/welcome", {
				controller: 'welcomeController',
				templateUrl: 'modules/welcome/view.html',
			});
	}
]);

angular.module('prolineApp').controller('welcomeController', function ($scope, $rootScope, $location, $cookieStore, authFactory) {
	
	$scope.pagename = "Welcome";
});;angular.module('prolineApp.welcome').factory('welcomeFactory', ['$http', function ($http) {
		
		/**
		 * Blank authFactory
		 * @type {Object}
		 */
		var authFactory = {};

		return authFactory;
	}]);