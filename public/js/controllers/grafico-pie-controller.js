angular.module('testechart')
    .controller("graficoPieController", ["$scope", "$location", function ($scope, $location) {
        $scope.chartConfig = {};
        $scope.reflow = function () {
            $scope.$broadcast('highchartsng.reflow');
        };

        $scope.voltar = function () {
            $location.path("/principal");
        }


    }]);