app.service('mockServerService', [
function() {
    this.events = [
        {
            id: 1,
            type: 'Social',
            name: 'Birthday Party',
            description: 'Don\'t miss the social event of the year....',
            link: '1',
            response: 'Yes'
        },
        {
            id: 2,
            type: 'Meeting',
            name: 'Catastrophe Mtg',
            description: 'Important meeting regarding the....',
            link: '2',
            response: ''
        },
        {
            id: 3,
            type: 'Task',
            name: 'Clean backyard',
            description: 'Needs to be cleaned up before given a fine of ....',
            link: '3',
            response: ''
        }
    ];
}]);
