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

        $scope.totalNewclients = function () {
            $location.path("/totalNewclients");
        }
        $scope.graficoCurrentCensus = function () {
            $location.path("/graficoCurrentCensus");
        }

        $scope.graficoTotalDetoxAmas = function () {
            $location.path("/graficoTotalDetoxAmas");
        }

        $scope.graficoTotalDetoxAmasPercent = function () {
            $location.path("/graficoTotalDetoxAmasPercent");
        }

        $scope.graficoTotalDetoxAmasTreatment = function () {
            $location.path("/graficoTotalDetoxAmasTreatment");
        }
        $scope.graficoCampaignStepDown = function () {
            $location.path("/graficoCampaignStepDown");
        }

        $scope.graficoCampaignStepDownPercent = function () {
            $location.path("/graficoCampaignStepDownPercent");
        }

         $scope.amasByCaseManage = function () {
            $location.path("/amasByCaseManage");
        }
        $scope.amasByCaseManagePercent= function () {
            $location.path("/amasByCaseManagePercent");
        }

    }]);