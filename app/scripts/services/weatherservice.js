'use strict';

/**
 * @ngdoc service
 * @name weatherApp.weatherService
 * @description
 * # weatherService
 * Service in the weatherApp.
 */
angular.module('weatherApp')
  .service('weatherService', function ($rootScope, $http) {
    // AngularJS will instantiate a singleton by calling "new" on this function


    var urls = {
      getByZip : "http://api.openweathermap.org/data/2.5/weather?zip={{zip}},us&appid=bd82977b86bf27fb59a04b61b657fb6f"
    };
    this.getWeatherData = function(zip) {
      var me = this;
      var url = urls.getByZip.replace("{{zip}}",zip);
      return $http.get(url);
    };


  });
