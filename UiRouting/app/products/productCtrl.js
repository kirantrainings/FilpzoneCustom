angular.module("products")
    .controller("productCtrl", ["$scope", "productSvc", "$rootScope",
                                function ($scope, productSvc, $rootScope) {

            // var promises = productSvc.getProducts();
            $scope.sortCriteria = "description";
            productSvc.getProducts()
                .then(function (response) {
                    $scope.completeProducts = response;

                    $scope.pageChanged();
                })
                .catch(function (response) {
                    $scope.error = response;
                })
                .finally(function (response) {
                    console.log("I am executed finally");
                });


            $scope.selectProduct = function (item) {
                productSvc.addProductForCheckOut(item);
                $rootScope.$broadcast("PRODUCT_ADDED", {
                    product: item
                });
            };

            $scope.changeCriteria = function () {

                if ($scope.sortCriteria == "description") {
                    $scope.sortCriteria = "-description";
                } else {
                    $scope.sortCriteria = "description";
                }

            };


            $scope.totalItems = 100;
            $scope.currentPage = 1;
            $scope.itemsPerPage=2;
            $scope.maxSize = 2;
            $scope.numPages = 2;

            $scope.setPage = function (pageNo) {
                $scope.currentPage = pageNo;
            };
            $scope.pageChanged = function () {
                console.log($scope.currentPage);
                $scope.products = $scope.completeProducts.slice(($scope.currentPage - 1) * 2, 2);
            };

}]);
