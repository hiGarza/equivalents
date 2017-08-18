var eqApp = angular.module('equivalents', ['ngRoute']);
eqApp.config(function($routeProvider) {
    $routeProvider
        // route for the home page
        .when('/', {
            templateUrl : 'views/main.html',
            controller  : 'mainController'
        })
        .when('/diet', {
            templateUrl : 'views/diet.html',
            controller  : 'dietController'
        })
});