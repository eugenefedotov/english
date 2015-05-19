(function () {
    "use strict";

    angular.module('English').factory('Post', Post);

    Post.$inject = ['$resource'];

    function Post($resource) {
        return $resource('/post/:id', {id : '@id'});
    }

})();
