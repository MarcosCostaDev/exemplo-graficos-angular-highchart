angular.module('testechart')
    .controller("totalNewclientsController", ["$scope", "$location", function ($scope, $location) {

        $scope.chartConfig = {
            chart: {
                type: 'column'
            },
            credits: {
                enabled: false
            },
            colors: ['#db3912', "#3266cb"],
            title: {
                text: 'Total New Clients & Readmit clients'
            },
            yAxis:{

                title: {
                    text: 'Total New clients'
                }
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
                name: 'Total new Clients',
                data: [59, 69, 70, 81, 57, 60, 61, 48, 38, 54]
            },

            {
                name: 'Total readmit clients',
                data: [105, 96, 92, 104, 96, 105, 109, 111, 103, 109]
            }]
        };

        $scope.reflow = function () {
            $scope.$broadcast('highchartsng.reflow');
        };

  


    }]);