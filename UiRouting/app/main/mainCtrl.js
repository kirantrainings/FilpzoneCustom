angular.module("main")
    .controller("mainCtrl", ["$scope", "authenticateSvc","$rootScope","$state", "productSvc",function ($scope, authenticateSvc,$rootScope,$state,productSvc) {
        $scope.userDetails= authenticateSvc.getUserDetails();
        $scope.itemCount=0;
        
        $rootScope.$on("USER_LOGGEDIN",function(event,args){
            $scope.userDetails= authenticateSvc.getUserDetails();
        });
        
        $rootScope.$on("PRODUCT_ADDED",function(event,args){
           $scope.itemCount = productSvc.getProductsForCheckout().length;
        });
        
        $scope.logout=function(){
           $scope.userDetails= authenticateSvc.logout();
            $state.go("login");
            
        };
        
}]);
