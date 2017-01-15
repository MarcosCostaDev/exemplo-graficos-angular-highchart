angular.module('testechart')
    .controller("graficoTotalDetoxAmasController", ["$scope", "$location", function ($scope, $location) {


        $scope.chartConfig = {
            chart: {
                type: 'column'
            },
            colors: ["#3266cb"],
            credits: {
                enabled: false
            },
            title: {
                text: 'Total Detox AMAs'
            },
            yAxis: {

                title: {
                    text: 'Detox AMAs'
                }
            },
            xAxis: {
                title: {
                    text: 'Month'
                },
                categories: ["January", "Feb", "March", "April", "May", "june", "july", "August", "September", "October"]
            },
            plotOptions: {

            },
            series: [{
                name: 'Detox AMAs',
                data: [17, 36, 22, 31, 10, 16, 34, 39, 20, 18]
            }]
        };
        $scope.reflow = function () {
            $scope.$broadcast('highchartsng.reflow');
        };




    }]);