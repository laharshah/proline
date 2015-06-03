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
});