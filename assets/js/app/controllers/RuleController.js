(function () {
    'use strict';

    angular.module('English').controller('RuleController', RuleController);

    RuleController.$inject = ['$scope', '$http', '$routeParams'];
    function RuleController ($scope, $http, $routeParams) {
        $http.get("js/app/data/rules.json").success(function(data) {
            $scope.rules = data[$routeParams['rule_id']];
        });
    }
})();
