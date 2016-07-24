app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/events');
    $stateProvider
        .state('events', {
            url: '/events',
            templateUrl: '/app/events/events.html',
            controller: 'eventsCtrl'
        })
        .state('detail', {
            url: '/:id',
            templateUrl: '/app/details/details.html',
            controller: 'detailsCtrl'
        });
});
