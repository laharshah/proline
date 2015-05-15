/**
 * Controller for view tables page
 */
angular.module('prolineApp').controller('homeController', function($scope, $location, authFactory) {

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
})


angular.module('prolineApp').controller('carouselController', function($scope) {
    $scope.myInterval = 3000;
    $scope.slides = [{
        image: 'https://proline-laharshah.c9.io/front_end/app/assets/images/home-slideibar/very_large_1.jpg'
    }, {
        image: 'https://proline-laharshah.c9.io/front_end/app/assets/images/home-slideibar/very_large_2.jpg'
    }, {
        image: 'https://proline-laharshah.c9.io/front_end/app/assets/images/home-slideibar/very_large_clubs.JPG'
    }, {
        image: 'https://proline-laharshah.c9.io/front_end/app/assets/images/home-slideibar/very_large_1.jpg'
    }];
});