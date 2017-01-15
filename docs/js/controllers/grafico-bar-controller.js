angular.module('testechart')
    .controller("graficoBarController", ["$scope", "$location", function ($scope, $location) {

        $scope.chartConfig = {
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Total New Clients & Readmit clients'
            },
             colors: ['#db3912', "#3266cb"],
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
                data: [63]
            },
            {
                name: 'Readmit clients',
                data: [32]
            }]
        }

        $scope.reflow = function () {
            $scope.$broadcast('highchartsng.reflow');
        };

        $scope.voltar = function () {
            $location.path("/principal");
        }

    }]);