angular.module('app').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('testa.html',
    "THIS IS A TESTa FILE\r" +
    "\n"
  );

  $templateCache.put('test.html',
    "THIS IS A TEST FILE\r" +
    "\n"
  );

}]);
