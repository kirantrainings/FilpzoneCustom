angular.module("products")
    .controller("productCtrl", ["$scope", "productSvc", "$rootScope",
                                function ($scope, productSvc, $rootScope) {

            // var promises = productSvc.getProducts();

            productSvc.getProducts()
                .then(function (response) {
                    $scope.products = response;
                })
                .catch(function (response) {
                    $scope.error=response;
                })
                .finally(function (response) {
                    console.log("I am executed finally");
                });


            $scope.selectProduct = function (item) {
                productSvc.addProductForCheckOut(item);
                $rootScope.$broadcast("PRODUCT_ADDED", {
                    product: item
                });
            }
}]);
