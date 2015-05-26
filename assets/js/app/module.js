(function () {
    'use strict';

    angular.module('English', [
        'ngRoute', 'ngSanitize'
    ])
        .config(EnglishConfig)
        .filter('safeHtml', function ($sce) {
            return function(value) {
                return $sce.trustAsHtml(value);
            };
        });

    EnglishConfig.$inject = ['$routeProvider'];
    function EnglishConfig($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl : 'view/main.html',
                controller  : 'MainController',
                title       : 'Welcome to Home Page'
            })
            .when('/rules/:rule_id', {
                templateUrl : 'view/rules.html',
                controller  : 'RuleController'
            })
            .when('/articles', {
                templateUrl : 'view/articles.html'
            })
            .otherwise({
                redirectTo : '/'
            });
    }
})();

jQuery(document).ready(function($) {
    $(document).tooltip({
        selector: "attr[data-type='tooltip']"
    });
});
