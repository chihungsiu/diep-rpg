'use strict';

angular.module('myApp').
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider
        .when('/test-it', {
            template: '<test-it></test-it>'
        })
        .when('/fight', {
            template: '<fight></fight>'
        });

    $routeProvider.otherwise({ redirectTo: '/test-it' });
}])
