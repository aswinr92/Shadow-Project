angular.module('stack.angular')
	.controller('HomeController',function($scope,stackStorage){
		'use strict';

		//$scope.stack = [];
		$scope.fadedIn = false;
		$scope.flag = false;
		$scope.removeItem = null;

		var maxStackLength = 10;

		$scope.stack = stackStorage.getAll() || [];

		$scope.pushItem = function(name){
			if (name === ''){
				return 0;
			}
			else {
				if($scope.stack.length >= maxStackLength){
					$scope.fadedIn = true;
					$scope.flag = true;
					$scope.showMsg('Stack Overflow');
				}
				else {
					$scope.stack.unshift(name);
					$scope.itemName = '';
					$scope.fadedIn = true;
					$scope.flag = false;
					$scope.showMsg('One Item Added to stack');
					stackStorage.add(name);
				}
			}
		};

		$scope.popItem = function(){
			if($scope.stack.length === 0){
				$scope.fadedIn = true;
				$scope.flag = true;
				$scope.showMsg('Stack Underflow');
			}
			else{
				$scope.removedItem = $scope.stack.shift();
				$scope.fadedIn = true;
				$scope.flag = false;
				$scope.showMsg('One Item Removed from stack');
				stackStorage.remove();
			}
		};

		$scope.removeAll = function(){
			while($scope.stack.length){
				$scope.stack.shift();
			}
			$scope.fadedIn = true;
			$scope.flag = false;
			$scope.showMsg('All Items Removed from stack');
			stackStorage.removeAll();
		};

		$scope.showMsg = function(msg){
			$scope.alertMessage = msg;
		};
	});