var app = angular.module("crypto", [
    'ui.router', 
]);

app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('rsa'); 

    $stateProvider
        .state('rsa', {
            url: '/rsa',
            templateUrl: 'views/rsa.html',
            controller: 'RSAController as rsa'
        })
        .state('eg', {
            url: '/eg',
            templateUrl: 'views/eg.html',
            controller: 'ElGamalController as eg'
         })
        .state('dh', {
            url: '/dh',
            templateUrl: 'views/dh.html',
            controller: 'DHController as dh'
        });

});

angular.module('crypto').
  directive('onlyDigits', function () {

    return {
        restrict: 'A',
        require: '?ngModel',
        link: function (scope, element, attrs, modelCtrl) {
            modelCtrl.$parsers.push(function (inputValue) {
                if (inputValue == undefined) return '';
                var transformedInput = inputValue.replace(/[^0-9]/g, '');
                if (transformedInput !== inputValue) {
                    modelCtrl.$setViewValue(transformedInput);
                    modelCtrl.$render();
                }
                return transformedInput;
            });
        }
    };
});
