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
	$http.get('server/about/contact.json').success(function(data) {
		$scope.contactInfo = data;
	});
}]);