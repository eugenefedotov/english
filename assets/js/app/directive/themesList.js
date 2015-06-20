"use strict";

angular.module('English').directive('themesList', themesList);

themesList.$inject = ['$http'];

function themesList ($http) {
    return {
        restrict    : 'AE',
        templateUrl : 'view/directive/themesList.html',
        scope       : {},
        link        : function ($scope) {

            $scope.themes = [];
            $scope.active = {};

            $http.get('themes/list')
                .success(function (data, status, headers, config) {
                    $scope.themes = data;
                })
                .error(function (data, status, headers, config) {
                    console.log(status, data);
                });
        }
    }
}
