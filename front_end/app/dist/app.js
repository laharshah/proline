angular.module('prolineApp', [
		'ngRoute',
		'ngAnimate',
		'ngCookies',
		'ui.bootstrap',
		'xeditable',
		'ap.lateralSlideMenu',
		'prolineApp.auth',
		'prolineApp.welcome',
		'prolineApp.ClubFitting',
		'prolineApp.simulators',
		'prolineApp.ClubRepair',
		'prolineApp.contact',
		'prolineApp.CustomProducts',
		'prolineApp.instructors',
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
	editableOptions.theme = 'bs3';
});;;angular.module('prolineApp').controller('rootController', function ($scope, $rootScope) {
	
	$rootScope.title = "Chicagoland's Premier Golf Shop & Club Fitter | Proline Golf Chicago";

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
	}]);;angular.module('prolineApp.ClubFitting', []);

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
	
});;angular.module('prolineApp.ClubFitting').factory('ClubFittingFactory', ['$http', function ($http) {
		
		/**
		 * Blank authFactory
		 * @type {Object}
		 */
		var authFactory = {};

		return authFactory;
	}]);;angular.module('prolineApp.ClubRepair', []);

angular.module('prolineApp.ClubRepair').config(['$routeProvider', function($routeProvider) {
				
		$routeProvider
			.when("/club-repair", {
				controller: 'ClubRepairController',
				templateUrl: 'modules/club-repair/view.html',
			});
	}
]);
angular.module('prolineApp').controller('ClubRepairController', function ($scope, $rootScope, $location, $cookieStore, authFactory) {
	
	$scope.pagename = "club-repair";
	$scope.packages = [
		{
		feature1name:"one",feature2name:"two",feature3name:"three",feature4name:"four",feature1name:"one",
		feature1content:"one",feature2content:"two",feature3content:"three",feature4content:"four"}
	]
});;angular.module('prolineApp.ClubRepair').factory('club-repairFactory', ['$http', function ($http) {
		
		/**
		 * Blank authFactory
		 * @type {Object}
		 */
		var authFactory = {};

		return authFactory;
	}]);;;;angular.module('prolineApp.CustomProducts', []);

angular.module('prolineApp.CustomProducts').config(['$routeProvider', function($routeProvider) {
				
		$routeProvider
			.when("/custom-products", {
				controller: 'CustomProductsController',
				templateUrl: 'modules/custom-products/view.html',
			});
	}
]);

angular.module('prolineApp').controller('CustomProductsController', function ($scope, $rootScope, $location, $cookieStore, authFactory) {
	
	$scope.pagename = "corporate-sales";
	
	$scope.customproducts = [
  						{
  							name:'Custom Balls',
  							about:'Details here of p1',
  							imgpath: 'assets/images/custom-products/large_thumb_logo_balls.jpg',
  						  	custom_p_id:'custom_p_1'
              			},
              			
              			{
  							name:'Custom Bags',
  							about:'Details here of p2',
  							imgpath: 'assets/images/custom-products/large_thumb_miniature-golf-bag-extralarge.jpg',
  						  	custom_p_id:'custom_p_2'
              			},
              			
              			{
  							name:'Custom Apparel',
  							about:'Details here of p3',
  							imgpath: 'assets/images/custom-products/large_thumb_CIMG09383.jpg',
  						  	custom_p_id:'custom_p_3'
              			},
              			
              			{
  							name:'Custom Accessories',
  							about:'Details here of p4',
  							imgpath: 'assets/images/custom-products/large_thumb_scotland-golf-gear-extralarge.jpg',
  						  	custom_p_id:'custom_p_4'
              			}];
	
	
});;angular.module('prolineApp.CustomProducts').factory('CustomProductsFactory', ['$http', function ($http) {
		
		/**
		 * Blank authFactory
		 * @type {Object}
		 */
		var authFactory = {};

		return authFactory;
	}]);;angular.module('prolineApp').controller('homeController', function($scope, $location, authFactory) {

    $scope.articles = [{
        heading: 'PGA GOLF INSTRUCTION',
        content: 'Prolines PGA professionals, with over 25 years of teaching experience, will make sure youre at the top of your game all year-round.',
        imgname: 'small_twitter_back',
        pagelink: 'instruction'
    }, {
        heading: 'Products',
        content: 'Proline offers the best equipment and apparel in the industry from brands like Taylormade, Travis Mathew, Titleist, Ping, Mizuno, Miura, Scotty Cameron, Callaway, Gmac, Puma, Chase54, J.Lindeberg, and more.',
        imgname: 'small_bagsandgreen',
        pagelink: 'product'
    }, {
        heading: 'Services',
        content: 'Weve got the latest technology and equipment used on tour to make sure your clubs are fit and customized especially for you.',
        imgname: 'small_65976_340786959371741_1214184585_n',
        pagelink: 'club-fitting'
    }];
    $scope.companydescription = "Don't forget We'll Price Match Your Best Offer!";

})

angular.module('prolineApp').controller('carouselController', function($scope) {

    $scope.myInterval = 5000;
    $scope.slides = [{
        image: 'assets/images/home-slideibar/sliderimg1.jpg'
    }, {
        image: 'assets/images/home-slideibar/sliderimg2.jpg'
    }, {
        image: 'assets/images/home-slideibar/sliderimg3.jpg'
    }, {
        image: 'assets/images/home-slideibar/sliderimg4.jpg'
    }];
    
    $scope.brands = [
           {
            img1: 'assets/images/products/apparel/small_Gold_Kartel_Logo.jpg',
            img2: 'assets/images/products/apparel/small_j_lindeberg_logo.jpg',
            img3: 'assets/images/products/apparel/small_maide_logo_black.jpg',
            img4: 'assets/images/products/apparel/small_mg_logo.jpg'
        },{
            img1: 'assets/images/products/apparel/small_travis-matthew.png',
            img2: 'assets/images/products/clubs/small_11810259-titleist.jpg',
            img3: 'assets/images/products/clubs/small_cleveland.jpeg',
            img4: 'assets/images/products/clubs/small_fourteen.jpg'
        }, {
            img1: 'assets/images/products/clubs/small_logo_BETTINARDI.jpg',
            img2: 'assets/images/products/clubs/small_miura_logo.jpg',
            img3: 'assets/images/products/clubs/small_Mizuno-Logo.gif',
            img4: 'assets/images/products/clubs/small_OdysseyLogo.png'
        }, {
            img1: 'assets/images/products/clubs/small_ping.jpg',
            img2: 'assets/images/products/clubs/small_scotty-cameron.jpeg',
            img3: 'assets/images/products/footwear/small_ECCO_LOGO.JPG',
            img4: 'assets/images/products/footwear/small_footjoy-logo.jpg'
        }, {
            img1: 'assets/images/products/footwear/small_kikkor-golf-logo_t640.jpg',
            img2: 'assets/images/products/footwear/small_Oakley.jpg',
            img3: 'assets/images/products/footwear/small_true_llinkwear.jpg',
            img4: 'assets/images/products/apparel/small_Gold_Kartel_Logo.jpg'
        }];
        
}).directive('disableAnimation', function($animate){
    return {
        restrict: 'A',
        link: function($scope, $element, $attrs){
            $attrs.$observe('disableAnimation', function(value){
                $animate.enabled(!value, $element);
            });
        }
    }
});;;angular.module('prolineApp.instructors', []);

angular.module('prolineApp.instructors').config(['$routeProvider', function($routeProvider) {
				
		$routeProvider
			.when("/instructors", {
				controller: 'InstructorsController',
				templateUrl: 'modules/instructors/view.html',
			});
	}
]);

angular.module('prolineApp').controller('InstructorsController', function ($scope, $rootScope, $location, $cookieStore, authFactory) {
	$scope.pagename = "instructors";

	$scope.instructors = [
  			{
  				name:'Gabe Rios, GM',
  				about:'Gabe Rios is an Illinois PGA Golf Professional, founder of Gabe Rios Golf, and General Manager of Proline Golf.  His unique ability to patiently explain swing problems and quickly improve contact and direction have made him the most requested teaching professional in Chicago. As a graduate of Coastal Carolina University he earned a degree in Marketing and Professional Golf Management. He was taught the golf swing by Illinois Golf Legend Jerry Vidovic. The knowledge handed down from Jerry and Gabe’s 26 years of golfing experience make him an excellent choice for golf lessons in Chicago. Gabe is available to fix your slice 6 days a week at Proline Golf. Lesson hours are 10-6 during the week and 10-5 on Saturdays. His lessons include real time ball flight, golf course simulation, video analysis, downloadable lessons, and most importantly a patient relaxed environment to enjoy your golf lesson every time. Outdoor range and playing lessons (within 30 minutes of Chicago) are available, please call Gabe directly at 847-372-0691 for more information.',
  				booklink:'https://booknow.appointment-plus.com/6r0crrgy/',
  				facebook:'https://www.facebook.com/gaberiosgolf',
  				twitter:'https://twitter.com/gaberiosgolf',
  				linkedin:'http://www.linkedin.com/in/gaberiosgolf/',
  				imgpath: 'assets/images/instructors/large_thumb_gaberios.JPG',
  			  	inid:'in1'
              },
  						{
  							name:'Marcus Yado',
  							about:'Marcus Yado is a PGA Professional and golf instructor in downtown Chicago. He has taught over 7,000 lessons since 2009 to players of all skill levels and backgrounds. Marcus focuses on helping his students develop the essential skills needed to play quality golf. His students become well rounded golfers in every part of the game, not just full swing. He also helps teach the details of the short game, mental game and proper practice. Marcus makes custom game plans for his students based on their specific goals and limitations. He uses video to analyze his client\'s swings then uploads their lesson to their e-mail or cell phone. Marcus also uses Flightscope technology to show his clients their ball flight as well as how their club moves through impact. He believes in keeping instruction simple and strives to maintain a fun learning environment for his students.',
  							booklink:'http://www.mychicagogolflesson.com/',
  							facebook:'https://www.facebook.com/mychicagogolf',
  							twitter: false,
  							linkedin: false,
  							imgpath: 'assets/images/instructors/large_thumb_yado_corny_pic.jpg',
                			inid:'in2'
  						},
  						{
  							name:'Scott Thomas',
  							about:'Scott Thomas has served as Director of Club Fitting for Proline Golf in downtown Chicago for the past two years. A graduate of Purdue University, Scott is a PGA Apprentice currently enrolled in the PGA Professional Golf Management Program. Scott has worked with beginners, seasoned amateurs, as well as PGA professionals to help develop and improve their golf swing. His teaching philosophy stresses the importance of moving both the body and golf club in a position that consistently puts the center of the club face on the ball. Scott believes that each student is unique in style, tendency, and physical limitation and therefore his teaching focuses on building a foundation of fundamentals that help students find their own perfect swing within its unique qualities. Lessons include the use of launch monitor with ball flight and V1 swing video analysis. Swing videos and follow-up commentary are emailed to students for online access. To schedule a lesson, Scott can be contacted at scott.thomas@pga.com.',
  							booklink:'http://prolinechicago.com/contact',
  							facebook:false,
  							twitter: false,
  							linkedin:'https://www.linkedin.com/pub/scott-thomas/12/215/185',
  							imgpath:'assets/images/instructors/scott-thomas.jpg',
                			inid:'in3'
  						},
  						{
  							name:'Scott Hogan',
  							about:'Scott is a PGA Certified Professional in Teaching and Coaching and was selected at one of the countries Top 50 Growth of the Game Teaching Professionals by the GRAA in 2014. Scott has taught approximately 10,000 lessons to 300 different students and helped his students win Club Championships, shoot career rounds and redefine their goals to levels his students would not have thought possible. Scott\'s passion has also taken him to work with golf\'s governing bodies to help bring new golfers and juniors to the game and help them to experience the joy and sense of accomplishment he feels when hitting a successful golf shot. Still though, Scott is looking to be educated on the latest techniques and cutting edge technologies that could possibly help his students improve. He has learned and collaborated with some of the greatest in the golf industry including Mike Malaska (2011 PGA Teacher of the Year), Tim Mahoney (Golf Magazine Top 100) and several more. Scott\'s philosophy is simple, to develop each individuals athletic fundamentals within their golf swing. Golf is a sport, but too often people forget that. Scott hopes that each of his students can feel like they would over a golf shot as if they were shooting a basket or throwing a ball. Without these athletic fundamentals, the athlete will never be able to perform under pressure. After that, Scott takes a holistic approach to the game working with students on their Full Swing, Short Game, Mental Game, Physical Fitness, Club Fitting and Practice routines.',
  							booklink:'http://scotthogangolf.lessoncaddy.com/people/10765-scott-hogan',
  							facebook:false,
  							twitter:false,
  							linkedin:false,
  							imgpath : 'assets/images/instructors/large_thumb_Scott_Hogan.jpg',
                inid:'in4' 
  						
              }];

});;angular.module('prolineApp.instructors').factory('instructionFactory', ['$http', function ($http) {
		
		/**
		 * Blank authFactory
		 * @type {Object}
		 */
		var authFactory = {};

		return authFactory;
	}]);;angular.module('prolineApp.product',[]);

angular.module('prolineApp.product').config(['$routeProvider', function($routeProvider) {
				
		$routeProvider
			.when("/product", {
				controller: 'productController',
				templateUrl: 'modules/product/view.html',
			});
	}
]);

angular.module('prolineApp').controller('productController', function ($scope, $rootScope, $location, $cookieStore, authFactory) {
	
	$scope.aboutus = "Serving the Chicagoland area for over 10 years, Proline is an authorized dealer of all the best known brands in golf including Taylormade, Titleist, Ping, and Mizuno. In addition, Proline specializes in offering high-quality boutique products from manufacturers like Bettinardi, Miura, Fourteen, and more. Our goal is to offer the full array of high-end equipment and customization available in the golf industry beyond what you normally find in traditional 'big-box' retailers.";
	$scope.pagename="product";
});;angular.module('prolineApp.product').factory('productFactory', ['$http', function ($http) {
		
		/**
		 * Blank authFactory
		 * @type {Object}
		 */
		var authFactory = {};

		return authFactory;
	}]);;angular.module('prolineApp.simulators', []);

angular.module('prolineApp.simulators').config(['$routeProvider', function($routeProvider) {
				
		$routeProvider
			.when("/simulators", {
				controller: 'simulatorsController',
				templateUrl: 'modules/simulators/view.html',
			});
	}
]);

angular.module('prolineApp').controller('simulatorsController', function ($scope, $rootScope, $location, $cookieStore, authFactory) {
	
	$scope.pagename = "Simulators";
	
});;angular.module('prolineApp.simulators').factory('simulatorsFactory', ['$http', function ($http) {
		
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