var app = angular.module('myApp', ['ngRoute', 'ngCookies']);

app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'static/partials/login.html',
        controller: 'loginController'
    })
    .when('/new', {
            templateUrl: 'static/partials/newUser.html',
            controller: 'newUserController'
        })
    .when('/main', {
        templateUrl: 'static/partials/main.html',
        controller: 'mainController'
    })
    .when('/new_appointment', {
        templateUrl: 'static/partials/new_appointment.html',
        controller: 'appointmentController'
    })
    .when('/logout', {
        templateUrl: 'static/partials/main.html',
        controller: 'logoutController'
    })
})
