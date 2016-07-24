app.controller('eventsCtrl', ['$scope', 'eventsService',
function($scope, eventsService) {
    var error = 'Events unsuccessfully retrieved';

    eventsService.getEvents().then(function(data){
        console.log('Events successfully retrieved');
        $scope.events = data;
    }, function(err){
        console.log(error);
        $scope.error = error;
    });


}]);
