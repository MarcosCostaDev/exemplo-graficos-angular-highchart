'use strict';

var testechart = angular.module('testechart', ["highcharts-ng"]);

testechart.controller('testecontroller', ['$scope', '$http', function ($scope, $http) {



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


}]);
