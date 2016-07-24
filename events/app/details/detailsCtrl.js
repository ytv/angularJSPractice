app.controller('eventCtrl', ['$scope', '$stateParams', 'eventsService', 'detailsService',
function($scope, $stateParams, eventsService, detailsService) {
    $scope.id = $stateParams.id;
    $scope.event = eventsService.getEvent($scope.id);

    $scope.rsvp = function(id, response) {
        detailsService.rsvp(id, response).then(function(data) {
            eventsService.updateResponse(id, response);
            console.log('Response for event ' + id + ' has been updated');
        }, function(data) {
            console.log('Error updating response for event ' + id);
        });
    }
}]);
