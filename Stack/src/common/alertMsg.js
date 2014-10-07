angular.module('stack.angular')
	.directive('alertMsg',function(){
		'use strict';

		return {
			restrict: 'A',
			link: function ($scope,element,attrs){
				$scope.$watch(attrs.fadeshown,function(value){
					if (value){
						element.fadeIn(500);
						$scope.fadedIn = false;
					}
					else {
						element.fadeOut(1000);
					}
				});
			}
		};
	});