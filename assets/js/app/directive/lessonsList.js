"use strict";

angular.module('English').directive('lessonsList', lessonsList);

lessonsList.$inject = ['$http', '$routeParams'];

function lessonsList($http, $routeParams) {
    return {
        restrict    : 'EA',
        templateUrl : 'view/directive/lessonsList.html',
        scope       : {},
        link        : function ($scope) {

            $scope.lessons  = [];
            $scope.verified = {};

            $http.get('lessons/list/'+$routeParams['rule_id'])
                .then(function (response) {
                    $scope.lessons = response.data;
                });

            $scope.verify = function (lesson_id, lesson_type) {
                $http.get('lessons/getAnswerById/'+lesson_id)
                    .then(function (response) {
                        $scope.verified[lesson_id] = {
                            done : true
                        };
                    });
            }
        }
    }
}
