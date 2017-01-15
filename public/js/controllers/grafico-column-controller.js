angular.module('testechart')
    .controller("graficoColumnController", ["$scope", "$location", function ($scope, $location) {


        $scope.chartConfig = {

            chart: {
                type: "column"
            },
            credits: {
                enabled: false
            },
            xAxis: {
                categories: ["January", "Feb", "March", "April", "May", "juny", "july", "Aug", "Sept"]
            },
            colors: ['#db3912', "#3266cb"],
            series: [
                { "name": "Total SD for new Clients", "data": [45, 37, 20, 50, 60, 64, 62, 55, 59], id: 's1' },
                { "name": "Total SD for Re-Admin", "data": [16, 27, 32, 30, 26, 25, 34, 20, 7], id: 's2' }

            ],
            title: {
                text: 'Step Down Count'
            }
        }

        $scope.reflow = function () {
            $scope.$broadcast('highchartsng.reflow');
        };




    }]);