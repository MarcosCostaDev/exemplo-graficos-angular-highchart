'use strict';

var testechart = angular.module('testechart', ["highcharts-ng"]);

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
            type: 'bar'
        },

        title: {
            text: 'Total fruit consumtion, grouped by gender'
        },

        xAxis: {
            categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
        },

        yAxis: {
            allowDecimals: false,
            min: 0,
            title: {
                text: 'Number of fruits'
            }
        },

        tooltip: {
            formatter: function () {
                return '<b>' + this.x + '</b><br/>' +
                    this.series.name + ': ' + this.y + '<br/>' +
                    'Total: ' + this.point.stackTotal;
            }
        },

        plotOptions: {
            column: {
                stacking: 'normal'
            }
        },

        series: [{
            name: 'John',
            data: [5, 3, 4, 7, 2],
            stack: 'male'
        }, {
            name: 'Joe',
            data: [3, 4, 4, 2, 5],
            stack: 'male'
        }, {
            name: 'Jane',
            data: [2, 5, 6, 2, 1],
            stack: 'female'
        }, {
            name: 'Janet',
            data: [3, 0, 4, 4, 3],
            stack: 'female'
        }]
        }

        break;

case 2:
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

    }

    $scope.contador += 1;

    if ($scope.contador == 3) {
      $scope.contador = 0;
    }
  }

  $scope.chartConfig = {

  }


  $scope.reflow = function () {
    $scope.$broadcast('highchartsng.reflow');
  };

}]);




  /*
  
    $scope.contador = 0;
    $scope.AtualGrafico = $scope.chartTypes[$scope.contador].title;
  
  
  
    $scope.change = function () {
  
      $scope.contador = $scope.chartTypes.length != $scope.contador + 1 ? $scope.contador + 1 : 0;
      $scope.chartConfig.chart.type = $scope.chartTypes[$scope.contador].id;
  
      $scope.AtualGrafico = $scope.chartTypes[$scope.contador].title;
  
      if ($scope.chartConfig.chart.type == "pie" || $scope.chartConfig.chart.type == "funnel") {
        $scope.chartConfig = {
          chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: $scope.chartConfig.chart.type,
            inverted: false
          },
          title: {
            text: 'Browser market shares January, 2015 to May, 2015'
          },
          tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
          },
          plotOptions: {
            pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                  color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
              }
            }
          },
          series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
              name: 'Microsoft Internet Explorer',
              y: 56.33
            }, {
              name: 'Chrome',
              y: 24.03,
              sliced: true,
              selected: true
            }, {
              name: 'Firefox',
              y: 10.38
            }, {
              name: 'Safari',
              y: 4.77
            }, {
              name: 'Opera',
              y: 0.91
            }, {
              name: 'Proprietary or Undetectable',
              y: 0.2
            }]
          }]
        }
      }
      else if ($scope.chartConfig.chart.type == "columnrange") {
        $scope.chartConfig = {
          chart: {
            type: 'columnrange',
            inverted: true
          },
  
          title: {
            text: 'Temperature variation by month'
          },
  
          subtitle: {
            text: 'Observed in Vik i Sogn, Norway'
          },
  
          xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
          },
  
          yAxis: {
            title: {
              text: 'Temperature ( °C )'
            }
          },
  
          tooltip: {
            valueSuffix: '°C'
          },
  
          plotOptions: {
            columnrange: {
              dataLabels: {
                enabled: true,
                formatter: function () {
                  return this.y + '°C';
                }
              }
            }
          },
  
          legend: {
            enabled: false
          },
  
          series: [{
            name: 'Temperatures',
            data: [
              [-9.7, 9.4],
              [-8.7, 6.5],
              [-3.5, 9.4],
              [-1.4, 19.9],
              [0.0, 22.6],
              [2.9, 29.5],
              [9.2, 30.7],
              [7.3, 26.5],
              [4.4, 18.0],
              [-3.1, 11.4],
              [-5.2, 10.4],
              [-13.5, 9.8]
            ]
          }]
        }
      }
      else {
       
        $scope.chartConfig = {
  
          chart: {
            type: $scope.chartTypes[$scope.contador].id,
            inverted: false
          },
          plotOptions: {
            series: {
              stacking: ''
            }
          },
          xAxis: {
            categories: [
              'Apples',
              'Pears',
              'Oranges',
              'Bananas',
              'Grapes',
              'Plums',
              'Strawberries',
              'Raspberries']
          },
  
          series: $scope.chartSeries,
          title: {
            text: 'Um simples grafico de exemplo'
          }
        }
      }
  
    };
  */


