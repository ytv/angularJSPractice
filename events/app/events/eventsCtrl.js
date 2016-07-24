app.controller('eventsCtrl', ['$scope', 'eventsService',
function($scope, eventsService) {

    $scope.error = '';
    $scope.events = [];

    var error = 'Events unsuccessfully retrieved';

    eventsService.getEvents().then(function(data){
        console.log('Events successfully retrieved');
        $scope.events = data;
    }, function(err){
        console.log(error);
        $scope.error = error;
    });

    $scope.rsvp = function(id, response) {
        eventsService.rsvp(id, response).then(function(data) {
            eventsService.updateResponse(id, response);
            console.log('Response for event ' + id + ' has been updated');
        }, function(data) {
            console.log('Error updating response for event ' + id);
        });
    }

}]);
