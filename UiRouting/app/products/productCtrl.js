angular.module("products")
    .controller("productCtrl", ["$scope", "productSvc", "$rootScope",
                                function ($scope, productSvc, $rootScope) {

            $scope.products = productSvc.getProducts();
            $scope.selectProduct = function (item) {
                productSvc.addProductForCheckOut(item);
                $rootScope.$broadcast("PRODUCT_ADDED",{product:item});
            }
}]);
