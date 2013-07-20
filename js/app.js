"use strict";

var pastaClockApp = angular.module('pastaClockApp', []);

pastaClockApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/home.html',
            controller : 'homeController'
        })
        .when('/cook/:pasta', {
            templateUrl: 'partials/pasta.html',
            controller : 'pastaController'
        })
        .when('/clock/:time', {
            templateUrl: 'partials/clock.html',
            controller : 'clockController'
        })
        .otherwise({
            redirectTo: '/'
        });
});
