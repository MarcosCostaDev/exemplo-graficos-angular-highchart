var testechart = angular.module('testechart', ["highcharts-ng", "ngRoute"]).config([
  "$routeProvider", function ($routeProvider) {

    $routeProvider
      .when("/principal"
      , {
        templateUrl: "partials/principal.html"
        , controller: "principalController"
      })
      .when("/graficoBar"
      , {
        templateUrl: "partials/grafico-partial.html"
        , controller: "graficoBarController"
      })
      .when("/graficoColumn"
      , {
        templateUrl: "partials/grafico-partial.html"
        , controller: "graficoColumnController"
      })
      .when("/graficoPie"
      , {
        templateUrl: "partials/grafico-partial.html"
        , controller: "graficoPieController"
      })
      .when("/totalNewclients"
      , {
        templateUrl: "partials/grafico-partial.html"
        , controller: "totalNewclientsController"
      })

      .when("/graficoCurrentCensus"
      , {
        templateUrl: "partials/grafico-partial.html"
        , controller: "graficoCurrentCensusController"
      })
      .when("/graficoTotalDetoxAmas"
      , {
        templateUrl: "partials/grafico-partial.html"
        , controller: "graficoTotalDetoxAmasController"
      })
      .when("/graficoTotalDetoxAmasPercent"
      , {
        templateUrl: "partials/grafico-partial.html"
        , controller: "graficoTotalDetoxAmasPercentController"
      })
      .when("/graficoTotalDetoxAmasTreatment"
      , {
        templateUrl: "partials/grafico-partial.html"
        , controller: "graficoTotalDetoxAmasTreatmentController"
      })
      .when("/graficoCampaignStepDown"
      , {
        templateUrl: "partials/grafico-partial.html"
        , controller: "graficoCampaignStepDownController"
      })
      .when("/graficoCampaignStepDownPercent"
      , {
        templateUrl: "partials/grafico-partial.html"
        , controller: "graficoCampaignStepDownPercentController"
      })
       .when("/amasByCaseManage"
      , {
        templateUrl: "partials/grafico-partial.html"
        , controller: "amasByCaseManageController"
      })
       .when("/amasByCaseManagePercent"
      , {
        templateUrl: "partials/grafico-partial.html"
        , controller: "amasByCaseManagePercentController"
      })

      .otherwise(
      {
        redirectTo: "/principal"
      }
      );

  }]);