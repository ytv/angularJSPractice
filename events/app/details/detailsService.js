app.service('detailsService', ['$q',
function($q) {
    this.rsvp = function(id, response) {
        return $q(function(resolve, reject) {
            // TODO: Implement request to update RSVP for event
            resolve(true);
        });
    }
}]);
