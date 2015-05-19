(function () {
    'use strict';

    angular.module('English', [
        'ngRoute'
    ]).config(EnglishConfig);

    EnglishConfig.$inject = ['$routeProvider'];
    function EnglishConfig($routeProvider) {
        console.log($routeProvider);
        $routeProvider
            .when('/', {
                templateUrl : 'view/main.html',
                controller  : 'MainController',
                title       : 'Welcome to Home Page'
            })
            .when('/article', {
                templateUrl : 'view/articles.html',
                controller  : 'ThemeController'
            })
            .when('/noun', {
                templateUrl : 'view/noun.html',
                controller  : 'ThemeController'
            })
            .when('/pronouns', {
                templateUrl : 'view/pronouns.html',
                controller  : 'ThemeController'
            })
            .when('/adjectives-degrees-of-comparison', {
                templateUrl : 'view/adjectives-degrees-of-comparison.html',
                controller  : 'ThemeController'
            })
            .when('/prepositions', {
                templateUrl : 'view/prepositions.html',
                controller  : 'ThemeController'
            })
            .when('/usage-of-tenses', {
                templateUrl : 'view/usage_of_tenses.html',
                controller  : 'ThemeController'
            })
            .when('/passive-voice', {
                templateUrl : 'view/passive_voice.html',
                controller  : 'ThemeController'
            })
            .when('/sequence-of-tenses', {
                templateUrl : 'view/sequence_of_tenses.html',
                controller  : 'ThemeController'
            })
            .when('/infinitive', {
                templateUrl : 'view/infinitive.html',
                controller  : 'ThemeController'
            })
            .when('/communion', {
                templateUrl : 'view/communion.html',
                controller  : 'ThemeController'
            })
            .when('/gerund', {
                templateUrl : 'view/gerund.html',
                controller  : 'ThemeController'
            })
            .when('/communion-gerund-verbalnoun', {
                templateUrl : 'view/communion_gerund_verbalnoun.html',
                controller  : 'ThemeController'
            })
            .when('/complex-object', {
                templateUrl : 'view/complex_object.html',
                controller  : 'ThemeController'
            })
            .when('/complex-subject', {
                templateUrl : 'view/complex_subject.html',
                controller  : 'ThemeController'
            })
            .when('/conditional-sentences', {
                templateUrl : 'view/conditional_sentences.html',
                controller  : 'ThemeController'
            })
            .when('/modal-verbs', {
                templateUrl : 'view/modal_verbs.html',
                controller  : 'ThemeController'
            })
            .otherwise({
                redirectTo : '/'
            });
    }
})();
