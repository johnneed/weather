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
      getByZip: 'http://api.openweathermap.org/data/2.5/weather?zip={{zip}},us&appid=bd82977b86bf27fb59a04b61b657fb6f'
    };

      function convertKtoF(K){
        return  Math.floor(K * 9/5 - 459.67);
      }

    //Let's use prototypal inheritance because it's a requirement.
    function LocalWeather(payload) {
      this.description = payload.data.weather[0].description;
      this.humidity = payload.data.main.humidity+'%';
      this.temp = convertKtoF(payload.data.main.temp)+'°F';
      this.pressure = payload.data.main.pressure + 'mmHg';
      this.zip = payload.zip;
    }

    this.fetchWeatherData = function (zip, callback) {

      var url = urls.getByZip.replace('{{zip}}', zip);
      //fetch data from API
      $http.get(url).success(function (data) {
          var payload = {zip : zip};
          payload.data = data;
              //Check for city not found response - this does not return an error code so we do this the hard way :-(
              if(data.cod === "404"){
                  //Whoops that zip doesn't exist
                callback(new Error("Invalid Zip Code"));

              } else {
                  //Good data, lets instantiate a localWeather object. and execute our callback.
                  callback(new LocalWeather(payload));
              }
        }
      ).error(function (err) {
          //Bad API call.  let's report the error.
          callback(err);
        });


    };


  });
