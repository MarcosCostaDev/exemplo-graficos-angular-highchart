angular.module('testechart')
    .controller("graficoStepDownByCmController", ["$scope", "$location", function ($scope, $location) {

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
            colors: [
                "#dd4578",
                "#009ac4",
                "#970196",
                "#10951e",
                "#ff9901",
                "#dc3b11",
                "#3065c9"
            ],
            xAxis: {
                categories: ["January", "Feb", "March", "April", "May", "june", "july", "August", "September", "October"]
            },


            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },
            series: [{
                name: 'RP',
                data: [35, 50, 39, 40, 58, 45, 48, 37, 55, 38]
            },
            {
                name: 'TS',
                data: [0, 38, 19, 30, 42, 41, 52, 59, 50, 58]
            },
            {
                name: 'TK',
                data: [28, 27, 67, 0, 0, 0, 0, 0, 0, 0]
            },
            {
                name: 'TD',
                data: [48, 40, 35, 29, 0, 0, 0, 0, 0, 0]
            },
            {
                name: 'AB',
                data: [0, 0, 25, 37, 47, 73, 0, 0, 0, 0]
            }]
        }

        $scope.reflow = function () {
            $scope.$broadcast('highchartsng.reflow');
        };

    }]);