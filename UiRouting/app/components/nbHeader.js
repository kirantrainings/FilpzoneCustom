angular.module("components")
.directive("nbHeaderProperty",[function(){
    return {
        //template:"<h1>Hello Guys</h1>",
        templateUrl:"app/templates/header.html",
        restrict:"ACE"
    };
    
}]);