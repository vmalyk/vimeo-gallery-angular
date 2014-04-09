var app = angular.module('vimeoGallery',['ngRoute','facebook']);

app.config(function($routeProvider) {
	'use strict';

	$routeProvider.when('/', {
			controller:  'LoginCtrl',
			templateUrl: 'views/login.html'
		}).when('/Gallery', {
			controller:  'ProfileCtrl',
			templateUrl: 'views/profile.html'
		}).otherwise({
			redirectTo: '/'
		});
})
    .config(function(FacebookProvider) {
        FacebookProvider.init('420013294796915');
    })