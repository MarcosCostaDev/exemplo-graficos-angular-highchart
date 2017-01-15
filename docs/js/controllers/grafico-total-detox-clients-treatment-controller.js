angular.module('testechart')
    .controller("graficoTotalDetoxAmasTreatmentController", ["$scope", "$location", function ($scope, $location) {


        $scope.chartConfig = {

            chart: {
                type: "column"
            },
            yAxis: {

                title: {
                    text: 'Total New Clients'
                }
            },

            xAxis: {
                categories: ["January", "Feb", "March", "April", "May", "juny", "july", "Aug", "Sept"]
            },
            colors: ["#3266cb", '#db3912'],
            series: [
                 { "name": "Total Detox", "data": [164, 165, 162, 185, 153, 165, 170, 159, 141, 163], id: 's2' },
                { "name": "Total Treatment Clients", "data": [63, 64, 51, 65, 76, 83, 98, 82, 76, 86], id: 's1' }
               

            ],
            title: {
                text: 'Total Detox Clients & Treatment Clients'
            }
        }

        $scope.reflow = function () {
            $scope.$broadcast('highchartsng.reflow');
        };

        $scope.voltar = function () {
            $location.path("/principal");
        }



    }]);