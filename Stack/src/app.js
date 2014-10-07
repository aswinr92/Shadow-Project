(function () {

    'use strict';

    angular.module('stack.angular', [

        'ngRoute',
        'ngResource',
        'ngSanitize',
        
        'stack.angular.templates',

    ])
        .run(function ($log) {
            $log.log('Exercise has been loaded.');
        });
})();
