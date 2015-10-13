'use strict';

/**
 * @ngdoc function
 * @name weatherApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the weatherApp
 */
angular.module('weatherApp')
  .controller('MainCtrl', function ($scope, weatherService) {


    function validateZip(zip){
      var zipRegex = /^\d{5}?$/;
      return zipRegex.test(zip);
    }

    function addToScope(localWeather){
      $scope.localWeather = localWeather;
    }

    function fetchWeatherData(){
      var zip = $scope.zipCode;
      if(zip && (zip.length >= 5)){// sanity check
        weatherService.fetchWeatherData(zip, addToScope);
      }
    }

    $scope.fetchWeatherData = fetchWeatherData;
    $scope.localWeather = {};
    $scope.zipCode = '';
    $scope.isValidZip = validateZip;


  });
