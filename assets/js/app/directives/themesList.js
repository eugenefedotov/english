(function () {
  "use strict";

  angular.module('English').directive('themesList', themesList);

  themesList.$inject = ['$http'];

  function themesList ($http) {
    return {
      restrict    : 'AE',
      templateUrl : 'view/directives/themesList.html',
      scope       : {},
      link        : function ($scope) {

        $scope.active = {};

        $http.get('themes/list')
          .success(function (data) {
            $scope.themes = data;
          })
          .error(function (data, status) {
            console.log('Error in theme list', status, data);
          });
      }
    }
  }
})();
