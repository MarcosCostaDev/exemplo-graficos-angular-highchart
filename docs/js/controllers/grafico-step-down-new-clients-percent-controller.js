angular.module('testechart')
    .controller("graficoCampaignStepDownPercentController", ["$scope", "$location", function ($scope, $location) {


        $scope.chartConfig = {
            chart: {
                type: 'column'
            },
            colors: ["#3266cb"],
            title: {
                text: 'Total Detox AMAs'
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
                name: '% of SD on New Clients',
                data: [43, 39, 32, 34, 52, 55, 59, 56, 57, 54]

            },
            ]
        };
        $scope.reflow = function () {
            $scope.$broadcast('highchartsng.reflow');
        };

        $scope.voltar = function () {
            $location.path("/principal");
        }



    }]);