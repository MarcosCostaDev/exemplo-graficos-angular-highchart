angular.module('testechart')
    .controller("totalNewclientsController", ["$scope", "$location", function ($scope, $location) {

        $scope.chartConfig = {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Total New Clients & Readmit clients'
            },
            xAxis: {
                categories: ["January", "Feb", "March", "April", "May", "juny"]
            },
            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },
            series: [{
                name: 'Total new Clients',
                data: [64, 31, 30, 50, 81, 57]
            },

            {
                name: 'Total readmit clients',
                data: [100, 69, 70, 50, 110, 111]
            }]
        };

        $scope.reflow = function () {
            $scope.$broadcast('highchartsng.reflow');
        };

        $scope.voltar = function () {
            $location.path("/principal");
        }


    }]);