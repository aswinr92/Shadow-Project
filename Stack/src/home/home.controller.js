angular.module('stack')
	.controller('HomeController',function($scope){
		'use strict';

		$scope.stackList = [];

		$scope.pushItem = function(name){
			$scope.stackList.push(name);
			$scope.itemName = '';
			$scope.alertMsg.css('display','inline');
			$scope.alertMessage ='One Item Added to stack';
			$scope.alertMsg.fadeOut(2000);
		};

		$scope.popItem = function(){
			var length = $scope.stackList.length-1;
			$scope.stackList.splice(length,1);
			$scope.alertMessage='One Item Removed from stack';
		};
	});