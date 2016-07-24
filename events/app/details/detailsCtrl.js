app.controller('detailsCtrl', ['$scope', '$stateParams', 'eventsService',
function($scope, $stateParams, eventsService) {

    $scope.id = $stateParams.id;
    $scope.eventDetails = eventsService.getEvent($scope.id);

}]);
