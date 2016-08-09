angular.module("flipzone", ["ui.router", "login","authenticate","main"]);

angular.module("flipzone")
    .config(function (
        $stateProvider, $urlRouterProvider) {
        var homeObj = {
            templateUrl: "app/templates/home.html",
            url: "home"
        };
        var loginObj = {
            templateUrl: "app/templates/login.html",
            url: "login",
            controller: "loginCtrl"
        };
        var registerObj = {
            templateUrl: "app/templates/register.html",
            url: "register"
        };
        $stateProvider.state("home", homeObj);
        $stateProvider.state("login", loginObj);
        $stateProvider.state("register", registerObj);

    });
