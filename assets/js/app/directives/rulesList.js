(function () {
  "use strict";

  angular.module('English').directive('rulesList', rulesList);

  rulesList.$inject = ['$http', '$routeParams'];

  function rulesList($http, $routeParams) {
    return {
      restrict    : 'AE',
      templateUrl : 'view/directives/rulesList.html',
      scope       : {},
      link        : function ($scope) {

        $scope.rules = {};

        $http
          .get('themes/dataByLink/' + $routeParams['theme_link'])
          .success(function (theme) {
            $http
              .get('rules/list/' + theme['id'])
              .success(function (rules) {
                $scope.rules.title     = theme['name'];
                $scope.rules.themeLink = theme['link'];
                $scope.rules.data      = rules;
              })
              .error(function (data, status) {
                console.log('Error in rules list', data, status);
              });
          })
          .error(function (data, status) {
            console.log("Error in data by link", data, status);
          });
      }
    }
  }
})();
