(function () {

    'use strict';

    angular.module('stack', [

        'ngRoute',
        'ngResource',
        'ngSanitize',
        
        'stack.templates',

    ])
        .run(function ($log) {
            $log.log('Exercise has been loaded.');
        });
})();
