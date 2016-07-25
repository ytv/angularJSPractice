var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'mainController'
        })

        .when('/about', {
            templateUrl: 'pages/about.html',
            controller: 'aboutController'
        })

        .when('/contact', {
            templateUrl: 'pages/contact.html',
            controller: 'contactController'
        });

    // $locationProvider.html5Mode(true);
});

app.controller('mainController', ['$scope',
function($scope) {
    $scope.message = 'Everyone come and see how good I look!';
}]);

app.controller('aboutController', ['$scope',
function($scope) {
    $scope.message = 'ABOUT PAGE';
}]);

app.controller('contactController', ['$scope',
function($scope) {
    $scope.message = 'CONTACT PAGE';
}]);
