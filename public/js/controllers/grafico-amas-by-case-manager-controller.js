angular.module('testechart')
    .controller("amasByCaseManageController", ["$scope", "$location", function ($scope, $location) {

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
                text: 'AMAs by Case Manager'
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
            series: [{
                name: 'AB AMAs',
                data: [0, 0, 3, 9, 3, 1, 0, 0, 0, 0]
            },

            {
                name: 'NP AMAs',
                data: [3, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            },
            {
                name: 'TD AMAs',
                data: [3, 10, 6, 4, 0, 0, 0, 0, 0, 0]
            },
            {
                name: 'TK AMAs',
                data: [3, 10, 1, 0, 0, 0, 0, 0, 0, 0]
            },
            {
                name: 'TS AMAs',
                data: [0, 2, 8, 9, 4, 7, 14, 7, 2, 2]
            },
            {
                name: 'RP AMAs',
                data: [2, 6, 3, 9, 2, 4, 11, 8, 4, 3]
            },
            {
                name: 'GL AMAs',
                data: [2, 1, 0, 0, 0, 1, 3, 8, 6, 5]
            }
            ]
        };

        $scope.reflow = function () {
            $scope.$broadcast('highchartsng.reflow');
        };


    }]);