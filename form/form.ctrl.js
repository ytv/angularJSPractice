var app = angular.module('app', []);

app.controller('formCtrl', ['$scope',
function($scope) {
    $scope.master = {};

    $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
    }

    $scope.save = function(user) {
        $scope.master = angular.copy(user);
    }

    $scope.reset();
}]);
