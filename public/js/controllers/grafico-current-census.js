angular.module('testechart')
    .controller("graficoCurrentCensusController", ["$scope", "$location", function ($scope, $location) {

        $scope.chartConfig = {
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Current Census (from Bed Board)'
            },
            credits: {
                enabled: false
            },
            colors: ['#db3912', "#3266cb"],
            yAxis: {
                min: 0

            },


            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },
            series: [{
                name: 'Delux Census',
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

      

    }]);