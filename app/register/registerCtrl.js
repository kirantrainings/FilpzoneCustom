angular.module("register")
    .controller("registerCtrl", ["$scope", function ($scope) {
        $scope.registerUser = {};
        $scope.register = function () {
            if ($scope.selectedCountry) {
                $scope.registerUser.country = $scope.selectedCountry.code;
            }
            console.log($scope.registerUser);
        };
        $scope.countries = [{
                "name": "India",
                "code": "IN"
        },
            {
                "name": "United States",
                "code": "US"
                          }];
        $scope.checkFields = function () {
            if ($scope.registerUser.firstName && $scope.registerUser.lastName && $scope.registerUser.age && $scope.registerUser.gender && $scope.registerUser.terms) {
                $scope.enableButton = true;
            } else {
                $scope.enableButton = false;
            }
        };
    }]);
