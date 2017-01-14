angular.module('testechart')
    .controller("principalController", ["$scope", "$location", function ($scope, $location) {

        $scope.graficoBar = function () {
            $location.path("/graficoBar");
        }
        $scope.graficoColunm = function () {
            $location.path("/graficoColumn");
        }
        $scope.graficoPie = function () {
            $location.path("/graficoPie");
        }

        $scope.totalNewclients = function(){
            $location.path("/totalNewclients");
        }

    }]);