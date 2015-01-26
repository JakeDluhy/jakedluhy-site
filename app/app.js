'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  // 'ngAnimate',
  'myApp.about',
  'myApp.projects',
  'myApp.blog',
  'myApp.post',
  'myApp.version',
  // 'myApp.splashAnimations'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/about'});
}]);
