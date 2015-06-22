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
                .success(function (data, status, headers, config) {
                    test(data)
                })
                .error(function (data, status, headers, config) {
                    console.log(status, data);
                });

            function test (theme_data) {
                $http.get('rules/list/' + theme_data['id'])
                    .success(function (data, status, headers, config) {
                        $scope.rules.title = theme_data['name'];
                        $scope.rules.data = data;
                    })
                    .error(function (data, status, headers, config) {
                        console.log(status, data);
                    });
            }
        }
    }
}
