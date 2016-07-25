app.service('eventsService', ['$q', 'mockServerService',
function($q, mockServerService) {

    this.getEvents = function() {
        // TODO: Update promise to make actual AJAX request when the backend is implemented
        return $q(function(resolve, reject) {
            mockServerService.getEvents().then(function(data) {
                resolve(data);
            }, function(reason) {
                reject(reason);
            });
        });
    };

    this.rsvp = function(n, response) {
        // TODO: Update promise to make actual AJAX request when the backend is implemented
        return $q(function(resolve, reject) {
            mockServerService.rsvp(n, response).then(function(data) {
                resolve(data);
            }, function(reason) {
                reject(reason);
            });
        });
    };

    this.getEvent = function(n) {
        // TODO: Update promise to make actual AJAX request when the backend is implemented
        return $q(function(resolve, reject) {
            mockServerService.getEvent(n).then(function(data) {
                resolve(data);
            }, function(reason) {
                reject(reason);
            });
        });
    };

    this.submitForm = function(id, name, response, guests, excuse) {
        return $q(function(resolve, reject) {
            mockServerService.submitForm(id, name, response, guests, excuse).then(function(data) {
                resolve(data);
            }, function(reason) {
                reject(reason);
            });
        });
    };

}]);
