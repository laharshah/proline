/**
 * Initializing the database model for login controller
 * @type [angular module]
 */
	angular.module('prolineApp.auth').factory('authFactory', ['$http', function ($http) {
		
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
	}]);