"use strict";

angular.module('English').directive('rulesList', rulesList);

rulesList.$inject = ['$http'];

function rulesList($http) {
    return {
        restrict    : 'EA',
        templateUrl : 'view/directive/rulesList.html',
        scope       : {},
        link : function ($scope) {

            $scope.rules = [];

            $http.get('rules/list')
                .success(function (data, status, headers, config) {
                    $scope.rules = data;
                })
                .error(function (data, status, headers, config) {
                    console.log(status, data);
                });
        }
    }
}
