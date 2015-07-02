(function () {
    'use strict';

    angular.module('English', [
        'ngRoute',
        'ngSanitize'
    ])
        .config(EnglishConfig)
        .filter('safeHtml', function ($sce) {
            return function (value) {
                return $sce.trustAsHtml(value);
            };
        });

    EnglishConfig.$inject = ['$routeProvider'];
    function EnglishConfig($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl : 'view/main.html'
            })
            .when('/rules/:theme_link', {
                templateUrl : 'view/rules.html'
            })
            .when('/rules/:theme_link/:rule_id', {
                templateUrl : 'view/lessons.html'
            })
            .otherwise({
                redirectTo : '/'
            });
    }
})();

/*
jQuery(document).ready(function($) {
    $(document).tooltip({
        selector: "attr[data-type='tooltip']"
    });
});
*/
