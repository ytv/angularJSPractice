var app = angular.module('app', []);

app.controller('appCtrl', ['$scope', 'myFactory', 'myService', 'myProvider',
function($scope, myFactory, myService, myProvider) {

    // myFactory.getData().then(function(data) {
    //     console.log('Success API request');
    //     $scope.display = data;
    // }, function(reason) {
    //     console.log('Failed: ' + reason);
    //     $scope.display = reason;
    // });

    // myService.getData().then(function(data) {
    //     console.log('Success API request');
    //     $scope.display = data;
    // }, function(reason) {
    //     console.log('Failed: ' + reason);
    //     $scope.display = reason;
    // });

    myProvider.getData().then(function(data) {
        console.log('Success API request');
        $scope.display = data;
    }, function(reason) {
        console.log('Failed: ' + reason);
        $scope.display = reason;
    });

}]);

app.factory('myFactory', ['$http', '$q',
function($http, $q) {
    var factory = {};
    var _url = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=JSON_CALLBACK';

    factory.getData = function() {
        return $q(function(resolve, reject) {
            $http.jsonp(_url).then(function(data) {
                resolve(data);
            }, function(reason) {
                reject(reason);
            });
        });

        // BELOW DOES THE SAME THING
        // var deferred = $q.defer();
        // deferred.notify('About to connect');
        // $http({
        //     method: 'JSONP',
        //     url: _url
        // }).then(function(data) {;
        //     deferred.resolve(data);
        // }, function() {
        //     deferred.reject('There was an error');
        // });
        // return deferred.promise;
    }
    return factory;
}]);

app.service('myService', ['$http', '$q',
function($http, $q) {
    var _url = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=JSON_CALLBACK';

    this.getData = function() {
        return $q(function(resolve, reject) {
            $http.jsonp(_url).then(function(data) {
                resolve(data);
            }, function(data) {
                reject(data);
            });
        });
    };
}]);

app.config(function(myProviderProvider) {
    myProviderProvider.url = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=JSON_CALLBACK';
});

app.provider('myProvider', function() {
    this.url = '';
    var self = this;
    this.$get = function($http, $q) {
        return {
            getData: function() {
                return $q(function(resolve, reject) {
                    $http.jsonp(self.url).then(function(data) {
                        resolve(data);
                    }, function(data) {
                        reject(data);
                    });
                });
            }
        }
    };
});
