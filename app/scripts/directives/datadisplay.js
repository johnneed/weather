'use strict';

/**
 * @ngdoc directive
 * @name weatherApp.directive:dataDisplay
 * @description
 * # dataDisplay
 */
angular.module('weatherApp')
  .directive('datadisplay', function () {
    return {
      templateUrl: '../views/my-weather.html',
      restrict: 'E'
      //link: function postLink(scope, element, attrs) {
      //  element.text('this is the dataDisplay directive');
      //}
    };
  });
