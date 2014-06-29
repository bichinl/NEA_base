var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider
		.when('/', {
			templateUrl: 'partials/home',
			controller: 'MainCtrl'
		})
		.otherwise({
			 redirectTo: '/'
		 });
	}
]);

myApp.controller('MainCtrl', function($scope, $http) {
	$scope.message = 'Mensaje desde Angular controller';
});