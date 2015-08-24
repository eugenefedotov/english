(function () {
  "use strict";

  angular.module("English").directive("checkLesson", checkLesson);

  checkLesson.$inject = ['$http'];

  function checkLesson ($http) {
    return {
      restrict : 'AE',
      templateUrl: 'view/directives/checkLesson.html',
      scope    : {
        lessonId   : '@',
        lessonType : '@'
      },
      link : function ($scope) {
        $scope.verified = {};

        $scope.verify = function (lesson_id, lesson_type) {
          $http
            .get('lessons/getAnswerById/' + lesson_id)
            .success(function (data) {
              switch (lesson_type) {
                case 'word' :
                  $scope.verified[lesson_id] = {
                    done : true
                  };
                  break;
                case 'translation' :
                  $scope.verified[lesson_id] = {
                    done : false
                  };
                  break;
              }
            })
            .error(function (data, status) {
              console.log("Error in check lesson", data, status);
            });
        };
      }
    }
  }

})();
