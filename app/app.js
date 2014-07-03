var app = angular.module('representativesApp', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/representatives',
      {
        controller: 'RepsController',
        templateUrl: '/app/partials/representatives.html'
      })
    .when('/representative/:representativeID',
      {
        controller: 'RepController',
        templateUrl: '/app/partials/representative.html'
      })
    .otherwise({ redirectTo: '/representatives' });
});
