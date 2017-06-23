// John Papa [Style Y101] IIFE
(function(){
  'use strict';
  // John Papa [Style Y170] Startup logic
  angular
    .module('app', [
      // angular modules
      'ui.router',
      'ngCookies',
      'ngAnimate',
      // 3rd party modules
      'ui.bootstrap',
      // app modules
      'components',
      'filters',
      'app.authentication',
      'app.dashboard',
      'app.header',
      'app.movie',
      'app.movies',
      'app.person',
      'app.torrents'
    ]);

})();
