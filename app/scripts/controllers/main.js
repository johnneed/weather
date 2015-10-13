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

        function validateZip(zip) {
            var zipRegex = /^\d{5}?$/;
            return zipRegex.test(zip);
        }

        function addToScope(localWeather) {
            if (localWeather.message) { // this is an error
                $scope.cityNotFound = true;
                $scope.zipCode = '';
                $scope.localWeather = {};
                return null;
            }
            $scope.localWeather = localWeather;
            $scope.cityNotFound = false;
        }

        function fetchWeatherData() {
            var zip = $scope.zipCode;
            if (zip && (zip.length >= 5)) {// sanity check
                weatherService.fetchWeatherData(zip, addToScope);
            }
        }

        $scope.cityNotFound = false;
        $scope.fetchWeatherData = fetchWeatherData;
        $scope.localWeather = {};
        $scope.zipCode = '';
        $scope.isValidZip = validateZip;

    });
