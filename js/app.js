'use strict';

var testechart = angular.module('testechart', ["highcharts-ng"]);

testechart.controller('testecontroller', ['$scope', '$http', function ($scope, $http) {

/*

  $http({
    method: 'GET'
    , url: 'https://gist.githubusercontent.com/marcoslcosta/987634ffe6afb424eae53d07eca215c6/raw/f417a46f82cb84bbca1f73325eaf84c7476534ba/arquivoDados.json'
  }).then(function (resultado) {
    $scope.Data = resultado.data;

    var ohlc = [],
      volume = [],
      dataLength = $scope.Data.length,
      // set the allowed units for data grouping
      groupingUnits = [[
        'week',                         // unit name
        [1]                             // allowed multiples
      ], [
        'month',
        [1, 2, 3, 4, 6]
      ]],

      i = 0;

    for (i; i < dataLength; i += 1) {
      ohlc.push([
        $scope.Data[i][0], // the date
        $scope.Data[i][1], // open
        $scope.Data[i][2], // high
        $scope.Data[i][3], // low
        $scope.Data[i][4] // close
      ]);

      volume.push([
        $scope.Data[i][0], // the date
        $scope.Data[i][5] // the volume
      ]);
    }


    // create the chart
    $scope.chartConfig = {

      rangeSelector: {
        selected: 1
      },

      title: {
        text: 'AAPL Historical'
      },

      yAxis: [{
        labels: {
          align: 'right',
          x: -3
        },
        title: {
          text: 'OHLC'
        },
        height: '60%',
        lineWidth: 2
      }, {
        labels: {
          align: 'right',
          x: -3
        },
        title: {
          text: 'Volume'
        },
        top: '65%',
        height: '35%',
        offset: 0,
        lineWidth: 2
      }],

      tooltip: {
        split: true
      },

      series: [{
        type: 'candlestick',
        name: 'AAPL',
        data: ohlc,
        dataGrouping: {
          units: groupingUnits
        }
      }, {
        type: 'column',
        name: 'Volume',
        data: volume,
        yAxis: 1,
        dataGrouping: {
          units: groupingUnits
        }
      }]
    }


  }, function (data) {
    $scope.Error = data.error;
  });
*/
  // split the data set into ohlc and volume



    //tipos de graficos suportados pela lib
    $scope.chartTypes = [
      { "id": "line", "title": "Line" },
      { "id": "spline", "title": "Smooth line" },
      { "id": "area", "title": "Area" },
      { "id": "areaspline", "title": "Smooth area" },
      { "id": "column", "title": "Column" },
      { "id": "bar", "title": "Bar" },
      { "id": "pie", "title": "Pie" },
      { "id": "scatter", "title": "Scatter" }
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
      { "name": "Janeiro", "data": [1, 2, 4, 7, 3, 6, 8, 1], id: 's1' },
      { "name": "Fevereiro", "data": [3, 1, 5, 2, 1, 1, 1, 2], id: 's2' },
      { "name": "Marco", "data": [5, 2, 2, 3, 5, 10, 1, 3], id: 's3' },
      { "name": "Abril", "data": [5, 2, 2, 3, 5, 10, 1, 3], id: 's5' },
      { "name": "Maio", "data": [5, 2, 2, 3, 5, 10, 1, 3], id: 's6' },
      { "name": "Junho", "data": [5, 2, 2, 3, 5, 10, 1, 3], id: 's6' }
  
    ];
  
    $scope.chartConfig = {
  
      chart: {
        type: 'column'
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
  
    $scope.reflow = function () {
      $scope.$broadcast('highchartsng.reflow');
    };
  

}]);
