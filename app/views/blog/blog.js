'use strict';

angular.module('myApp.blog', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/blog', {
    templateUrl: 'views/blog/blog.html',
    controller: 'BlogCtrl'
  });
}])

.controller('BlogCtrl', ['$http', '$scope', function($http, $scope) {
	$http.get('server/blog/posts.json').success(function(posts) {
		$scope.posts = posts;
	});
}]);