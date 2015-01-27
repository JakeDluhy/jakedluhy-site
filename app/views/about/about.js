'use strict';

angular.module('myApp.about', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/about', {
    templateUrl: 'views/about/about.html',
    controller: 'AboutCtrl'
  });
}])

.controller('AboutCtrl', ['$scope', '$http', function($scope, $http) {
	$http.get('server/about/bio.json').success(function(data) {
		$scope.bio = data;
	});
	$http.get('server/projects/projects.json').success(function(projects) {
		console.log(projects);
		$scope.projects = projects;
	});
	$http.get('server/about/contact.json').success(function(data) {
		$scope.contactInfo = data;
	});

	//animation
	$scope.detailedView = false;
	$scope.showProject = function(event) {
		$scope.detailedView = true;
		$(event.currentTarget).addClass('active');
		$(event.currentTarget).parent().addClass('active');
		$(event.currentTarget).siblings(".project-info").addClass('active');
	}
	$scope.showAll = function(event)  {
		$scope.detailedView = false;
		$(document).find('.active').removeClass('active');
	}
}]);