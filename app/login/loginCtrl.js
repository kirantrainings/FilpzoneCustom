angular.module("login")
    .controller("loginCtrl", ["$scope", function ($scope) {
        var users = [{
                "username": "kiran",
                "password": "kiran@1234",
                "firstName": "Kiran",
                "lastName": "Paturi"
            },
            {
                "username": "ravi",
                "password": "ravi@1234",
                "firstName": "Ravi",
                "lastName": "abcd"
            }]

        $scope.user = {};
        $scope.loginUser = function () {
            $scope.invalidUser = false;
            //console.log($scope.user);
            if (validateUser()) {
                //do something

            } else {
                //show the validation.
                $scope.invalidUser = true;
            }

        };

        var validateUser = function () {
            // take the username and password from view
            // check the user exists in the users array.
            /* var data = _.find(users, $scope.user);
             console.log(data);

             angular.forEach(users, function (item) {
                 if (item.username == $scope.user.username && item.password == $scope.user.password) {
                     console.log("User Existis");
                 }
             });*/
            return _.find(users, $scope.user);
        };

}]);
