angular.module('testechart')
    .controller("graficoBarController", ["$scope", "$location", function ($scope, $location) {

        $scope.chartConfig = {
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Total New Clients & Readmit clients'
            },

            yAxis: {
                min: 0,
                title: {
                    text: 'Total new Clients'
                }
            },


            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },
            series: [{
                name: 'Total new Clients',
                data: [64]
            },
            {
                name: 'Readmit clients',
                data: [31]
            }]
        }

        $scope.reflow = function () {
            $scope.$broadcast('highchartsng.reflow');
        };

        $scope.voltar = function () {
            $location.path("/principal");
        }

    }]);