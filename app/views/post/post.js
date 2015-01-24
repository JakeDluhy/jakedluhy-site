'use strict';

angular.module('myApp.post', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/blog/:postId', {
    templateUrl: 'views/post/post.html',
    controller: 'PostCtrl'
  });
}])

.controller('PostCtrl', ['$http', '$scope', '$routeParams', function($http, $scope, $routeParams) {
	$http.get('server/blog/posts/'+ $routeParams.postId + '.json').success(function(post) {
		$scope.post = post;
	});
}]);