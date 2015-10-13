'use strict';

/**
 * @ngdoc directive
 * @name weatherApp.directive:dataDisplay
 * @description
 * # dataDisplay
 */
angular.module('weatherApp')
  .directive('blah', function () {
    return {
      template: '<div>aaa</div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the dataDisplay directive');
      }
    };
  });
