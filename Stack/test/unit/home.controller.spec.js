describe('HomeController', function () {

    'use strict';
    var _controller,
        _stackStorage,
        _scope;

    beforeEach(function () {
        // Load the app's main module
        module('stack.angular');

        // Inject the necessary components
        inject(function ($controller, $rootScope) {
            _scope = $rootScope.$new();
            _stackStorage = {
                getAll : function(){},
                add : function(){},
                remove : function(){},
                removeAll : function(){}
            };
            _controller = function () {
                return $controller('HomeController', {$scope: _scope, stackStorage: _stackStorage});
            };

        });

        _scope.stack = [];
    });


    it('should be defined', function () {
        expect(_controller()).toBeDefined();

    });

    it('should populate the stack from storage during initialization', function () {
        //arrange
        var defaultStack = [];
        spyOn(_stackStorage, 'getAll').andReturn(defaultStack);
        
        //act
        _controller();
        
        //assert
        expect(_stackStorage.getAll).toHaveBeenCalled();
        expect(_scope.stack).toBe(defaultStack);
    });

    it('shouldn\'t add item to stack if the item name is empty',function(){

        _controller();
        _scope.pushItem('');

        expect(_scope.stack.length).toEqual(0);
    });

    it('should add item to the stack if length less than 10',function(){

        _controller();
        spyOn(_stackStorage,'add');
        spyOn(_scope,'showMsg');
        _scope.pushItem('a');

        expect(_scope.stack[0]).toBe('a');
        expect(_scope.stack.length).toEqual(1);
        expect(_scope.showMsg).toHaveBeenCalledWith('One Item Added to stack');
        expect(_stackStorage.add).toHaveBeenCalledWith('a');

    });

    it('should throw error message if stack length tries to exceed 10',function(){

        _controller();
        spyOn(_stackStorage,'add');
        spyOn(_scope,'showMsg');
        _scope.pushItem('a');
        _scope.pushItem('a');
        _scope.pushItem('a');
        _scope.pushItem('a');
        _scope.pushItem('a');
        _scope.pushItem('a');
        _scope.pushItem('a');
        _scope.pushItem('a');
        _scope.pushItem('a');
        _scope.pushItem('a');
        _scope.pushItem('a');

        expect(_scope.showMsg).toHaveBeenCalledWith('Stack Overflow');
        expect(_stackStorage.add).toHaveBeenCalled();
        //expect(_stackStorage.add.calls.count()).toEqual(10);
    });

    it('should remove the last added element from the stack on pop button click',function(){

        _controller();
        spyOn(_stackStorage,'remove');
        spyOn(_scope,'showMsg');
        _scope.pushItem('a');
        _scope.pushItem('b');
        _scope.popItem();

        expect(_scope.stack.length).toEqual(1);
        expect(_scope.removedItem).toBe('b');
        expect(_scope.stack[0]).toBe('a');
        expect(_scope.showMsg).toHaveBeenCalledWith('One Item Removed from stack');
        expect(_stackStorage.remove).toHaveBeenCalled();
    });

    it('should throw alert message stack underflow is pop is invoked when stack length is 0',function(){

        _controller();
        spyOn(_scope,'showMsg');
        _scope.popItem();

        expect(_scope.showMsg).toHaveBeenCalledWith('Stack Underflow');
    });

    it('should delete all elements when remove all button is clicked',function(){

        _controller();
        spyOn(_stackStorage,'removeAll');
        spyOn(_scope,'showMsg');
        _scope.removeAll();

        expect(_scope.stack.length).toEqual(0);
        expect(_scope.showMsg).toHaveBeenCalledWith('All Items Removed from stack')
        expect(_stackStorage.removeAll).toHaveBeenCalled();
    });

});