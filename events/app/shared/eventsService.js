app.service('eventsService', ['$q', 'mockServerService',
function($q, mockServerService) {

    this.getEvents = function() {
        return $q.when(mockServerService.events);
    };

    this.updateResponse = function(n, response) {
        mockServerService.events[n-1].response = response;
    };

    this.getEvent = function(n) {
        return mockServerService.events[n-1];
    };

    this.rsvp = function(id, response) {
        console.log(id, response);
        return $q(function(resolve, reject) {
            // TODO: Implement request to update RSVP for event
            resolve(true);
        });
    };

}]);
