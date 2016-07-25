app.config(['$routeProvider',
function($routeProvider) {
    $routeProvider.when('/events', { templateUrl: 'index.html' });
    $routeProvider.when('/events/1', { templateUrl: 'index.html' });
    // $urlRouterProvider.otherwise('/events');
}]);
