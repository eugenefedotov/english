(function () {
  "use strict";

  angular.module('English').directive('lessonsList', lessonsList);

  lessonsList.$inject = ['$http', '$routeParams'];

  function lessonsList($http, $routeParams) {
    return {
      restrict    : 'EA',
      templateUrl : 'view/directives/lessonsList.html',
      scope       : {},
      link        : function ($scope) {

        $http.get('lessons/list/' + $routeParams['rule_id'])
          .success(function (lessons) {
            $scope.lessons = lessons;
          });
      }
    }
  }
})();
