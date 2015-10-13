'use strict';

/**
 * @ngdoc function
 * @name weatherApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the weatherApp
 */
angular.module('weatherApp')
  .controller('MainCtrl', function ($scope, weatherService, $http) {

    function fetchDataByZip(zip){
      var weatherData = weatherService.getWeatherData($scope.zipCode);
      weatherData
        .success(function(data) {
          $scope.weatherData = data;
        });
    };

    $scope.fetchWeatherData = function(){
      var zip = $scope.zipCode;
      if(zip && (zip.length >= 5)){// sanity check
        fetchDataByZip(zip);
      }
    }

    $scope.weatherData = {};
    $scope.zipCode;

  });
