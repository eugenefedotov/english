/*(function () {
    'use strict';

    angular.module('English').controller('RulesController', RulesController);

    RulesController.$inject = ['$scope', '$http', '$routeParams'];
    function RulesController ($scope, $http, $routeParams) {
        $http.get("js/app/data/rules.json").success(function(data) {
            $scope.rules = data[$routeParams['rule_id']];
        });
    }
})();*/
