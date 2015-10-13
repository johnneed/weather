'use strict';

/**
 * @ngdoc service
 * @name weatherApp.weatherService
 * @description
 * # weatherService
 * Service in the weatherApp.
 */
angular.module('weatherApp')
  .service('weatherService', function ($rootScope, $http, $q) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var urls = {
      getByZip: "http://api.openweathermap.org/data/2.5/weather?zip={{zip}},us&appid=bd82977b86bf27fb59a04b61b657fb6f"
    };

    //Let's use prototypal inheritance because it's a requirement.
    function localWeather(payload) {
      this.description = payload.data.weather[0].description;
      this.humidity = payload.data.main.humidity;
      this.temp = payload.data.main.temp;
      this.pressure = payload.data.main.pressure;
      this.zip = payload.zip
    }

    this.fetchWeatherData = function (zip, callback) {
      var me = this;
      var url = urls.getByZip.replace("{{zip}}", zip);
      //fetch data from API
      $http.get(url).success(function (data) {
          var payload = {zip : zip};
          payload.data = data;
          //Good data, lets instantiate a localWeather object. and execute our callback.
         callback(new localWeather(payload));
        }
      ).error(function (err) {
          //Bad API call.  let's report the error.
          callback(err);
        });


    };


  });
