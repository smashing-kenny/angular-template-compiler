'use strict';

angular.module('TemplateCompiler', []).directive('ngTemplateCompiler', function ($compile) {
  return {
    priority: -1,
    restrict: 'A',
    scope: {
      onsort: '='
    },
    link: function ($scope, $element, attrs) {
      console.log('ininit');
      const content = $element[0].content.cloneNode(true);
      const res = $compile(content)($scope.$parent);
      $element.parent().append(res);
    }
  };
});