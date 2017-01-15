angular.module('testechart')
    .controller("graficoTotalDetoxAmasPercentController", ["$scope", "$location", function ($scope, $location) {


        $scope.chartConfig = {
            chart: {
                type: 'column'
            },
            colors: ["#3266cb"],
            credits: {
                enabled: false
            },
            title: {
                text: '% Total Detox AMAs'
            },
            yAxis: {

                title: {
                    text: '% Detox AMAs'
                },
                labels: {
                    formatter: function () {
                        return this.value + ' %';
                    }
                },
            },
            xAxis: {
                title: {
                    text: 'Month'
                },

                categories: ["January", "Feb", "March", "April", "May", "june", "july", "August", "September", "October"]
            },
            tooltip: {
                pointFormat: "Value: {point.y:.2f} %"
            },
            plotOptions: {


            },
            series: [{
                name: 'Detox AMAs',
                data: [10, 22, 14, 17, 7, 10, 20, 25, 14, 11]

            },
            ]
        };
        $scope.reflow = function () {
            $scope.$broadcast('highchartsng.reflow');
        };

        


    }]);