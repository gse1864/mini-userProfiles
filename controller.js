var app = angular.module("userProfiles");

//This is the formula:
//app.controller("titleOfController"), ["titleOfFirstServiceArgument", "titleOfSecondServiceArg", function(firstParam, secondParam)

app.controller("mainController", ["$scope", "mainService", function($scope, mainService) {
    $scope.users = mainService.getUsers();                            
}]);

