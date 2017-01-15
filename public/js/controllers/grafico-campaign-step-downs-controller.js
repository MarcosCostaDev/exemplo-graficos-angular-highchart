angular.module('testechart')
    .controller("graficoCampaignStepDownController", ["$scope", "$location", function ($scope, $location) {


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
            colors: ["#3266cb", '#db3912'],
            series: [
                { "name": "New Clients Campaign SD", "data": [37, 29, 25, 32, 46, 52, 51, 53, 45, 53], id: 's1' },
                { "name": "Re-Admin Campaign SD", "data": [11, 13, 9, 17, 18, 13, 16, 14, 9, 15], id: 's2' }

            ],
            title: {
                text: 'Campaign Step Downs'
            }
        }

        $scope.reflow = function () {
            $scope.$broadcast('highchartsng.reflow');
        };




    }]);