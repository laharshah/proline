/**
 * Initializing the database model for login controller
 * @type [angular module]
 */
	angular.module('prolineApp.contact').factory('contactFactory', ['$http', function ($http) {
		
	/**
		 * Blank authFactory
		 * @type {Object}
		 */
		var authFactory = {};

		// // var apiUrl = 'http://localhost:8080/eluck/api/index.php/v1/';

		// var apiUrl = 'https://prolinee-laharshah.c9.io/proline/contact-form.php';

		// authFactory.processEmailSender = function (user) {
		// 	console.log("model");
		// 	return $http.post(apiUrl, user);
		// };
		
		return authFactory;
		
		
	}]);