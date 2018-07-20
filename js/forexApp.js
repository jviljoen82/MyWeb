var forexApp = angular.module("ForexApp", []);


forexApp.directive("getLoginName", getLoginName)
    .directive("getPassword", getPassword)
    .controller('instaCntrl', ['$scope', ($scope) => new instaCntrl($scope)]);