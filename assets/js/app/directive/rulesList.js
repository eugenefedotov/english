"use strict";

angular.module('English').directive('rulesList', rulesList);

rulesList.$inject = ['$http', '$routeParams'];

function rulesList($http, $routeParams) {
    return {
        restrict    : 'AE',
        templateUrl : 'view/directive/rulesList.html',
        scope       : {},
        link        : function ($scope) {

            $scope.rules = [];

            $http.get('themes/dataByLink/'+$routeParams['theme_link'])
                .then(function (response) {
                    var theme_data = response.data;

                    $http.get('rules/list/' + theme_data['id'])
                        .then(function (response) {
                            $scope.rules.title = theme_data['name'];
                            $scope.rules.link  = theme_data['link'];
                            $scope.rules.data  = response.data;
                        });
                });
        }
    }
}
