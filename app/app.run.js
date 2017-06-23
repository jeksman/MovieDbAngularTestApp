(function(){
  'use strict';
  // John Papa [Style Y171] Any code that needs to run when an application starts should be declared in a factory, exposed via a function, and injected into the run block.
  angular
    .module('app')
    .run(authenticate);

  authenticate.$inject = ['authenticationService', '$urlRouter'];

  function authenticate(authenticationService, $urlRouter) {
    return authenticationService.getUser().then(function(){
      $urlRouter.sync();
      $urlRouter.listen();
    });
  }

})();