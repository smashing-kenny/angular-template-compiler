'use strict';

angular.module('ConstantDirective', []).directive('ngConstant', ['$ConstantInjector', function ($ConstantInjector) {
  return {
    restrict: 'A',
    transclude: false,
    link: function (scope, element, attrs) {
      $ConstantInjector.constant(attrs.ngConstant, JSON.parse(element.html()));
      element.remove();
    }
  };
}]).provider('$ConstantInjector', ['$provide', function ($provide) {
  this.$get = [function () {
    return {
      constant: function (name, value) {
        $provide.constant(name, value);
      }
    };
  }];
}]);