'use strict';

angular.module('myApp.projects', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/projects', {
    templateUrl: 'views/projects/projects.html',
    controller: 'ProjectsCtrl'
  });
}])

.controller('ProjectsCtrl', ['$scope', '$http', function($scope, $http) {
	$http.get('server/projects/projects.json').success(function(projects) {
		$scope.projects = projects;
	});
}]);