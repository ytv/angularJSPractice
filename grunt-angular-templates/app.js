function TestCtrl($templateCache) {
  console.log($templateCache.get('test.html'));
}

function TestACtrl($templateCache) {
  console.log($templateCache.get('testa.html'));
}

angular.module('app', ['ngRoute'])

.config(function($routeProvider){
  $routeProvider
    .when('/events', {
        controller: 'TestCtrl as test',
        templateUrl: 'test.html'
    })
    .when('/events/a',{
        controller: 'TestACtrl as test',
        templateUrl: 'testa.html'
      }
  )
  .otherwise('/events');
})


.controller('TestCtrl', TestCtrl)
.controller('TestACtrl', TestACtrl);
