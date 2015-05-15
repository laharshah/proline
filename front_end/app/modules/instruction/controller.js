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

	$scope.instructors = [
  						{
  							name:'Gabe Rios, GM',
  							about:'Gabe Rios is an Illinois PGA Golf Professional, founder of Gabe Rios Golf, and General Manager of Proline Golf.  His unique ability to patiently explain swing problems and quickly improve contact and direction have made him the most requested teaching professional in Chicago. As a graduate of Coastal Carolina University he earned a degree in Marketing and Professional Golf Management. He was taught the golf swing by Illinois Golf Legend Jerry Vidovic. The knowledge handed down from Jerry and Gabe’s 26 years of golfing experience make him an excellent choice for golf lessons in Chicago. Gabe is available to fix your slice 6 days a week at Proline Golf. Lesson hours are 10-6 during the week and 10-5 on Saturdays. His lessons include real time ball flight, golf course simulation, video analysis, downloadable lessons, and most importantly a patient relaxed environment to enjoy your golf lesson every time. Outdoor range and playing lessons (within 30 minutes of Chicago) are available, please call Gabe directly at 847-372-0691 for more information.',
  							booklink:'https://booknow.appointment-plus.com/6r0crrgy/',
  							facebook:'https://www.facebook.com/gaberiosgolf',
  							twitter:'https://twitter.com/gaberiosgolf',
  							linkedin:'http://www.linkedin.com/in/gaberiosgolf/',
  							imgpath: 'https://fabrica-production.s3.amazonaws.com/proline-golf/item/102/image/large_thumb_gaberios.JPG'
  						},
  						{
  							name:'Marcus Yado',
  							about:'Marcus Yado is a PGA Professional and golf instructor in downtown Chicago. He has taught over 7,000 lessons since 2009 to players of all skill levels and backgrounds. Marcus focuses on helping his students develop the essential skills needed to play quality golf. His students become well rounded golfers in every part of the game, not just full swing. He also helps teach the details of the short game, mental game and proper practice. Marcus makes custom game plans for his students based on their specific goals and limitations. He uses video to analyze his client\'s swings then uploads their lesson to their e-mail or cell phone. Marcus also uses Flightscope technology to show his clients their ball flight as well as how their club moves through impact. He believes in keeping instruction simple and strives to maintain a fun learning environment for his students.',
  							booklink:'http://www.mychicagogolflesson.com/',
  							facebook:'https://www.facebook.com/mychicagogolf',
  							twitter: false,
  							linkedin: false,
  							imgpath: 'https://fabrica-production.s3.amazonaws.com/proline-golf/item/4/image/large_thumb_yado_corny_pic.jpg'
  						},
  						{
  							name:'Scott Thomas',
  							about:'Scott Thomas has served as Director of Club Fitting for Proline Golf in downtown Chicago for the past two years. A graduate of Purdue University, Scott is a PGA Apprentice currently enrolled in the PGA Professional Golf Management Program. Scott has worked with beginners, seasoned amateurs, as well as PGA professionals to help develop and improve their golf swing. His teaching philosophy stresses the importance of moving both the body and golf club in a position that consistently puts the center of the club face on the ball. Scott believes that each student is unique in style, tendency, and physical limitation and therefore his teaching focuses on building a foundation of fundamentals that help students find their own perfect swing within its unique qualities. Lessons include the use of launch monitor with ball flight and V1 swing video analysis. Swing videos and follow-up commentary are emailed to students for online access. To schedule a lesson, Scott can be contacted at scott.thomas@pga.com.',
  							booklink:'http://prolinechicago.com/contact',
  							facebook:false,
  							twitter: false,
  							linkedin:'https://www.linkedin.com/pub/scott-thomas/12/215/185',
  							imgpth:'no image'
  						},
  						{
  							name:'Scott Hogan',
  							about:'Scott is a PGA Certified Professional in Teaching and Coaching and was selected at one of the countries Top 50 Growth of the Game Teaching Professionals by the GRAA in 2014. Scott has taught approximately 10,000 lessons to 300 different students and helped his students win Club Championships, shoot career rounds and redefine their goals to levels his students would not have thought possible. Scott\'s passion has also taken him to work with golf\'s governing bodies to help bring new golfers and juniors to the game and help them to experience the joy and sense of accomplishment he feels when hitting a successful golf shot. Still though, Scott is looking to be educated on the latest techniques and cutting edge technologies that could possibly help his students improve. He has learned and collaborated with some of the greatest in the golf industry including Mike Malaska (2011 PGA Teacher of the Year), Tim Mahoney (Golf Magazine Top 100) and several more. Scott\'s philosophy is simple, to develop each individuals athletic fundamentals within their golf swing. Golf is a sport, but too often people forget that. Scott hopes that each of his students can feel like they would over a golf shot as if they were shooting a basket or throwing a ball. Without these athletic fundamentals, the athlete will never be able to perform under pressure. After that, Scott takes a holistic approach to the game working with students on their Full Swing, Short Game, Mental Game, Physical Fitness, Club Fitting and Practice routines.',
  							booklink:'http://scotthogangolf.lessoncaddy.com/people/10765-scott-hogan',
  							facebook:false,
  							twitter:false,
  							linkedin:false,
  							imgpath : 'https://fabrica-production.s3.amazonaws.com/proline-golf/item/3800/image/large_thumb_Scott_Hogan.jpg' 
  						}];

});