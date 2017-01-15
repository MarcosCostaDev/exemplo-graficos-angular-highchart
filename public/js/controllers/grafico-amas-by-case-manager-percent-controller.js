angular.module('testechart')
    .controller("amasByCaseManagePercentController", ["$scope", "$location", function ($scope, $location) {

        $scope.chartConfig = {
            chart: {
                type: 'column'
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
            title: {
                text: '% Campaign Step Downs'
            },
            xAxis: {
                title: {
                    text: 'Month'
                },
                categories: ["January", "Feb", "March", "April", "May", "june", "july", "August", "September", "October"]
            },
            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },
            tooltip: {
                pointFormat: "Value: {point.y:.2f} %"
            },
            series: [{
                name: 'AB AMAs',
                data: [0, 0, 0, 11, 12, 4, 2]
            },

            {
                name: 'NP AMAs',
                data: [25, 0, 0, 0, 0, 0, 0]
            },
            {
                name: 'TD AMAs',
                data: [14, 23, 14, 24, 0, 0]
            },
            {
                name: 'TK AMAs',
                data: [14, 33, 17, 0, 0, 0]
            },
            {
                name: 'TS AMAs',
                data: [0, 10, 19, 17, 8, 15, 0]
            },
            {
                name: 'RP AMAs',
                data: [2, 13, 7, 15, 2, 3, 21]
            },
            {
                name: 'GL AMAs',
                data: [11, 0, 0, 0, 0, 4, 13]
            }
            ]
        };

        $scope.reflow = function () {
            $scope.$broadcast('highchartsng.reflow');
        };

     


    }]);