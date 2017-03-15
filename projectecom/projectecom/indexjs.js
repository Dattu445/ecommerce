/// <reference path="C:\Users\PRASAD\Desktop\projectecom\projectecom\angular.min (3).js" />

                       
var applog = angular.module('myApp',['ngRoute']);

applog.config([ '$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/Books', {
            templateUrl: 'Templates/Books.html',
            controller: 'Bookscontroller'
            })
            .when('/Home', {
                templateUrl: 'Templates/Home.html',
                controller: 'Homecontroller'
            })
        .otherwise({
            redirectTo : "/Home"
        });
        
        $locationProvider.html5Mode(true); //Remove the '#' from URL.
    }
]);
applog.controller("Bookscontroller", function ($scope) {
    $scope.message = "almost ochinatte chudam";
});
applog.controller("Homecontroller", function ($scope) {
    $scope.message1 = "Homepage";
});