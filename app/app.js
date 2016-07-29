//Module declaration.
angular.module("flipzone", ["register", "login", "home"]);

angular.module("flipzone")
    .config(function() {
        console.log("Hey I am the main Module");
    });