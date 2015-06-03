/**
 * Controller for view tables page
 */

angular.module('prolineApp.contact', []);

angular.module('prolineApp.contact').config(['$routeProvider', function($routeProvider) {
				
		$routeProvider
			.when("/contact", {
				controller: 'contactController',
				templateUrl: 'modules/contact/view.html',
			});
	}
]);


angular.module('prolineApp').controller('contactController', function ($scope,$http, $rootScope, $location, $cookieStore, authFactory) {
	
	$scope.pagename = "contact";
	$scope.result = 'hidden'
    $scope.resultMessage;
    $scope.formData; //formData is an object holding the fname, lname, email,phone, and message
    $scope.submitButtonDisabled = false;
    $scope.submitted = false; //used so that form errors are shown only after the form has been submitted
	
	// $scope.user = {};
	// $scope.submitcontactForm = function (allGood) {
	// 	if(allGood) {
	// 		authFactory.processEmailSender($scope.user)
	// 			.success(function (response, code) {
	// 				$scope.submitButtonDisabled = true;
 //                   $scope.resultMessage = data.message;
 //                   $scope.result='bg-success';
	// 				console.log("1");

	// 			})
	// 			.error(function (response, code) {
	// 				if(code === 401) {
	// 					alert("Invalid credentials. Please try again.");
	// 				} else if(response.success===false){
	// 					$scope.submitButtonDisabled = false;
	//                     $scope.resultMessage = data.message;
	//                     $scope.result='bg-danger';
	// 					console.log(response);
	// 					console.log(code);
	// 					alert(response.message);
	// 				} else {
	// 					$scope.submitButtonDisabled = false;
	//                     $scope.resultMessage = data.message;
	//                     $scope.result='bg-danger';
	// 					alert("Erro while login");
	// 				}
	// 			});
	// 	}
	// };	
	$scope.submitform = function(contactform) {
        $scope.submitted = true;
        $scope.submitButtonDisabled = true;
        if (contactform.$valid) {
            $http.post('https://prolinee-laharshah.c9.io/proline/contact-form.php',$scope.formData)
            .success(function(data){
                console.log(data);
                if (data.success) { //success comes from the return json object
                    $scope.submitButtonDisabled = true;
                    $scope.resultMessage = data.message;
                    $scope.result='bg-success';
                } else {
                	console.log(data);
                	$scope.submitButtonDisabled = false;
                    $scope.resultMessage = data.message;
                    $scope.result='bg-danger';
                }
            });
        } else {
            $scope.submitButtonDisabled = false;
            $scope.resultMessage = 'Failed <img src="http://www.chaosm.net/blog/wp-includes/images/smilies/icon_sad.gif" alt=":(" class="wp-smiley">  Please fill out all the fields.';
            $scope.result='bg-danger';
        }
    }    
}).factory('contactFactory', ['$http', function ($http) {
		
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
		
		
	}]);;
