angular.module('prolineApp', []).directive('navToggle', function() {
    return {
        restrict: 'EA',
        link: function(scope, element, attrs) {
            element.bind('click', function() {
                element.toggleClass(attrs.toggleClass);
            });
        }
    };
});
