angular.module('stack.angular')
    .config(function ($routeProvider) {
        'use strict';

        $routeProvider
            .when('/', {
                templateUrl: 'home/home.html',
                controller: 'HomeController'
            })
            .otherwise({ redirectTo: '/' });
    });