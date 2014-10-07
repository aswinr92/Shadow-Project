angular.module('stack')
	.controller('HomeController',function($scope){
		'use strict';

		$scope.stacks = [];
		$scope.fadedIn = false;
		var maxStackLength = 10;
		$scope.tempstack = [];
		$scope.flag = false;

		$scope.pushItem = function(name){
			if (name === ''){
				return null;
			}
			else {
				if($scope.stacks.length >= maxStackLength){
					$scope.fadedIn = true;
					$scope.flag = true;
					$scope.showMsg('Stack Overflow');
				}
				/*else {
					$scope.stacks.push(name);
					$scope.itemName = '';
					$scope.fadedIn = true;
					$scope.showMsg('One Item Added to stack');
				}*/
				else {
					for( var i=$scope.stacks.length;i>0;i--){
						$scope.tempstack[i] = $scope.stacks[i-1];
					}
					$scope.tempstack[0] = name;

					$scope.stacks = $scope.tempstack;
					$scope.itemName = '';
					$scope.fadedIn = true;
					$scope.flag = false;
					$scope.showMsg('One Item Added to stack');
					console.log($scope.stacks);
				}
			}
		};

		$scope.popItem = function(){
			if($scope.stacks.length === 0){
				$scope.fadedIn = true;
				$scope.flag = true;
				$scope.showMsg('Stack Underflow');
			}
			else{
				//var length = $scope.stacks.length-1;
				//$scope.stacks.splice(length,1);
				$scope.stacks.splice(0,1);
				$scope.fadedIn = true;
				$scope.flag = false;
				$scope.showMsg('One Item Removed from stack');
				console.log($scope.stacks);
			}
		};

		$scope.removeAll = function(){
			for(var i=$scope.stacks.length-1; i>=0;i--){
				$scope.stacks.splice(i,1);
			}
			$scope.fadedIn = true;
			$scope.flag = false;
			$scope.showMsg('All Items Removed from stack');
			console.log($scope.stacks);
		};

		$scope.showMsg = function(msg){
			$scope.alertMessage = msg;
		};
	});