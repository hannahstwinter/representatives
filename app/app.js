var app = angular.module('representativesApp', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/representatives',
      {
        controller: 'RepresentativesController',
        templateUrl: '/app/partials/representatives.html'
      })
    .when('/representative/:representativeID',
      {
        controller: 'RepresentativeController',
        templateUrl: '/app/partials/representative.html'
      })
    .otherwise({ redirectTo: '/representatives' });
});
