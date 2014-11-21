Bbadconfig(['$routeProvider',
	function ($routeProvider) {
		$routeProvider
			.when('/home', {
				templateUrl: 'templates/home.html',
				controller: 'HomeController'
			})
			.when('/about', {
				templateUrl: 'templates/about.html',
				controller: 'AboutController'
			})
			.when('/contacts', {
				templateUrl: 'templates/contacts.html',
				controller: 'ContactController'
			})
			.otherwise({
				redirectTo: '/home'
			});
}]);
