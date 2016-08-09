angular.module("main")
    .controller("mainCtrl", ["$scope", "authenticateSvc","$rootScope","$state", function ($scope, authenticateSvc,$rootScope,$state) {
        $scope.userDetails= authenticateSvc.getUserDetails();
        
        $rootScope.$on("USER_LOGGEDIN",function(event,args){
            $scope.userDetails= authenticateSvc.getUserDetails();
        });
        
        $scope.logout=function(){
           $scope.userDetails= authenticateSvc.logout();
            $state.go("login");
            
        };
        
}]);
