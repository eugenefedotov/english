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
    function EnglishConfig($routeProvider) {}
})();

jQuery(document).ready(function($) {
    $(document).tooltip({
        selector: "attr[data-type='tooltip']"
    });
});
