describe('HomeController', function () {

    'use strict';
    var _controller,
        _scope;

    beforeEach(function () {
        // Load the app's main module
        module('stack');

        // Inject the necessary components
        inject(function ($controller, $rootScope) {
            _scope = $rootScope.$new();
            _controller = function () {
                return $controller('HomeController', {$scope: _scope});
            };

        });
    });


    it('should be defined', function () {
        expect(_controller()).toBeDefined();

    });

    it('should add item to the stack if length less than 10',function(){
        _scope.stacks = [];

        _controller();
        spyOn(_scope,'showMsg');
        _scope.pushItem('a');

        expect(_scope.stacks[0]).toBe('a');
        expect(_scope.stacks.length).toEqual(1);
        expect(_scope.showMsg).toHaveBeenCalledWith('One Item Added to stack');

    });

    it('should throw error message is stack length tries to exceed 10',function(){
        _scope.stacks =[];
        //_scope.stacks.length = 10;

        _controller();
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
    });

    it('should remove the last added element from the stack on pop button click',function(){
        _scope.stacks = [];

        _controller();
        spyOn(_scope,'showMsg');
        _scope.pushItem('a');
        _scope.pushItem('b');
        _scope.popItem();

        expect(_scope.stacks.length).toEqual(1);
        expect(_scope.stacks[0]).toBe('a');
        expect(_scope.showMsg).toHaveBeenCalledWith('One Item Removed from stack');
    });

    it('should throw alert message stack underflow is pop is invoked when stack length is 0',function(){
        _scope.tasks=[];

        _controller();
        spyOn(_scope,'showMsg');
        _scope.popItem();

        expect(_scope.showMsg).toHaveBeenCalledWith('Stack Underflow');
    });

    

});