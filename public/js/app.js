'use strict';

var testechart = angular.module('testechart', ["highcharts-ng", "ngRoute"]).config([
  "$routeProvider", function ($routeProvider) {
    $routeProvider
      .when("/graficoBar"
      , {
        templateUrl: "partials/grafico-bar.html"
        , controller: "graficoBarController"
      })
      .when("/graficoColumn"
      , {
        templateUrl: "partials/grafico-column.html"
        , controller: "graficoColumnController"
      })
      .when("/graficoPie"
      , {
        templateUrl: "partials/grafico-pie.html"
        , controller: "graficoPieController"
      })
       .when("/totalNewclients"
      , {
        templateUrl: "partials/grafico-total-new-clients.html"
        , controller: "totalNewclientsController"
      })
      .when("/principal"
      , {
        templateUrl: "partials/principal.html"
        , controller: "principalController"
      })

      .otherwise(
      {
        redirectTo: "/principal"
      }
      );

  }]);
/*
testechart.controller('testecontroller', ['$scope', '$http', function ($scope, $http) {
  $scope.chartTypes = [
    { "id": "line", "title": "Line" },
    { "id": "spline", "title": "Smooth line" },
    { "id": "area", "title": "Area" },
    { "id": "areaspline", "title": "Smooth area" },
    { "id": "column", "title": "Column" },
    { "id": "bar", "title": "Bar" },
    { "id": "pie", "title": "Pie" },
    { "id": "scatter", "title": "Scatter" },
    { "id": "funnel", "title": "funnel" },
    { "id": "waterfall", "title": "waterfall" },
    { "id": "columnrange", "title": "columnrange" },
  ];

  //estilos suportados
  $scope.dashStyles = [
    { "id": "Solid", "title": "Solid" },
    { "id": "ShortDash", "title": "ShortDash" },
    { "id": "ShortDot", "title": "ShortDot" },
    { "id": "ShortDashDot", "title": "ShortDashDot" },
    { "id": "ShortDashDotDot", "title": "ShortDashDotDot" },
    { "id": "Dot", "title": "Dot" },
    { "id": "Dash", "title": "Dash" },
    { "id": "LongDash", "title": "LongDash" },
    { "id": "DashDot", "title": "DashDot" },
    { "id": "LongDashDot", "title": "LongDashDot" },
    { "id": "LongDashDotDot", "title": "LongDashDotDot" }
  ];

  $scope.chartSeries = [
    { "name": "New Clients Campaign %", "data": [54, 41, 45, 60, 63, 61], id: 's1' }

  ];

  $scope.chartConfig = {};
  $scope.contador = 0;

  $scope.change = function () {



    switch ($scope.contador) {

      case 0:
        $scope.chartConfig = {

          chart: {
            type: "column"
          },
          xAxis: {
            categories: ["January", "Feb", "March", "April", "May", "juny", "july", "Aug", "Sept"]
          },

          series: [
            { "name": "Total SD for new Clients", "data": [45, 37, 20, 50, 60, 64, 62, 55, 59], id: 's1' },
            { "name": "Total SD for Re-Admin", "data": [16, 27, 32, 30, 26, 25, 34, 20, 7], id: 's2' }

          ],
          title: {
            text: 'Step Down Count'
          }
        }

        break;
      case 1:
        $scope.chartConfig = {

          chart: {
            type: "column"
          },
          xAxis: {
            categories: ["January", "Feb", "March", "April", "May", "juny"]
          },

          series: [
            { "name": "New Clients Campaign %", "data": [54, 41, 45, 60, 63, 61], id: 's1' }

          ],
          title: {
            text: 'Campaign Step Down New Clients'
          }
        }

        break;
      case 2:
        $scope.chartConfig = {
          chart: {
            type: 'column'
          },
          title: {
            text: 'Total New Clients & Readmit clients'
          },
          yAxis: {
            categories: ["January", "Feb", "March", "April", "May", "juny"]
          },
          xAxis: {
            min: 0,
            title: {
              text: 'Total New Clients & Readmit clients'
            }
          },
          plotOptions: {
            column: {
              pointPadding: 0.2,
              borderWidth: 0
            }
          },
          series: [{
            name: 'Total number Clients',
            data: [210, 300, 250, 350, 300, 320]
          },
          {
            name: 'Total readmit',
            data: [100, 69, 70, 50, 110, 111]
          }]
        }

        break;
      case 3:
        $scope.chartConfig = {
          chart: {
            type: 'column'
          },
          title: {
            text: 'Total New Clients & Readmit clients'
          },
          xAxis: {
            categories: ["January", "Feb", "March", "April", "May", "juny"]
          },

          plotOptions: {},
          legend: {
            reversed: true
          },
          series: [{
            name: 'Total new Clients',
            data: [64, 31, 30, 50, 81, 57]
          },
          {
            name: 'Total readmit clients',
            data: [100, 69, 70, 50, 110, 111]
          }]
        }

        break;
      case 4:
        $scope.chartConfig = {
          chart: {
            type: 'column'
          },
          title: {
            text: 'Total New Clients & Readmit clients'
          },
          xAxis: {
            categories: ["January", "Feb", "March", "April", "May", "juny"]
          },
          plotOptions: {
            series: {
              stacking: 'normal'
            }
          },
          series: [{
            name: 'Total new Clients',
            data: [64, 31, 30, 50, 81, 57]
          },

          {
            name: 'Total readmit clients',
            data: [100, 69, 70, 50, 110, 111]
          }]
        }

        break;
      case 5:
        $scope.chartConfig = {
          chart: {
            type: 'bar'
          },
          title: {
            text: 'Total New Clients & Readmit clients'
          },

          yAxis: {
            min: 0,
            title: {
              text: 'Total new Clients'
            }
          },


          plotOptions: {
            series: {
              stacking: 'normal'
            }
          },
          series: [{
            name: 'Total new Clients',
            data: [64]
          },
          {
            name: 'Readmit clients',
            data: [31]
          }]
        }
        break;
    }

    $scope.contador += 1;

    if ($scope.contador == 6) {
      $scope.contador = 0;
    }
  }

  $scope.reflow = function () {
    $scope.$broadcast('highchartsng.reflow');
  };

}]);




*/
