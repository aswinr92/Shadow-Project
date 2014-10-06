angular.module('stack')
	.controller('HomeController',function($scope){
		'use strict';

		$scope.stacks = [];
		$scope.fadedIn = false;
		var maxStackLength = 10;

		$scope.pushItem = function(name){
			if (name === ''){
				return null;
			}
			else {
				if($scope.stacks.length >= maxStackLength){
					$scope.fadedIn = true;
					$scope.showMsg('Stack Overflow');
				}
				else {
					$scope.stacks.push(name);
					$scope.itemName = '';
					$scope.fadedIn = true;
					$scope.showMsg('One Item Added to stack');
				}
			}
		};

		$scope.popItem = function(){
			if($scope.stacks.length === 0){
				$scope.fadedIn = true;
				$scope.showMsg('Stack Underflow');
			}
			else{
				var length = $scope.stacks.length-1;
				$scope.stacks.splice(length,1);
				$scope.fadedIn = true;
				$scope.showMsg('One Item Removed from stack');
			}
		};

		$scope.removeAll = function(){
			for(var i=$scope.stacks.length-1; i>=0;i--){
				$scope.stacks.splice(i,1);
			}
			$scope.fadedIn = true;
			$scope.showMsg('All Items Removed from stack');
		};

		$scope.showMsg = function(msg){
			$scope.alertMessage = msg;
		};
	});