angular.module('stack.angular')
	.service('stackStorage',function(){
		'use strict';

		var storage = window.localStorage;
		var counter = 0;

		this.getAll = function(){
			var result = [];
			for(var i=0;i<storage.length;i++){
                var key = storage.key(i);
                var dataAsString = storage.getItem(key);
                //var data = window.JSON.parse(dataAsString);
                result.unshift(dataAsString);
            }
            return result;
		};

		this.add = function(item){
			//++counter;
			storage.setItem(++counter,(item));
        };

        this.remove = function(){
			//console.log(id);
            storage.removeItem(counter--);
        };

		this.removeAll = function(){
			for(var i=storage.length;i>=0;i--){
				storage.removeItem(i);
			}
			counter = 0;
        };
	});