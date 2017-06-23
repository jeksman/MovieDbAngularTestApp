(function(){
  'use strict';
  
  angular
    .module('app.person')
    .factory('personService', personService);

  personService.$inject = ['$http', 'API_SETTINGS'];

  function personService($http, API_SETTINGS) {
    var factory = {
      getPerson : getPerson
    };

    function getPerson(id){
      var url = API_SETTINGS.url + '/person/' + id;

      return $http.get(url, {
        params: {
          append_to_response  : 'movie_credits,tagged_images'
        }
      });
    }

    return factory;
  }

})();