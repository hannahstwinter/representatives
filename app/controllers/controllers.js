app.controller('RepresentativesController', function ($scope, representativesService, $http) {
  init();

  function init() {
    // $scope.representatives = representativesService.getRepresentatives();
    $http({method: 'GET', url: 'https://www.govtrack.us/api/v2/role?current=true'}).
    success(function(data, status, headers, config) {
    }).
    error(function(data, status, headers, config) {
    }).then(function(data) {
      $scope.representatives = data.data.objects;
    });
  }
});

app.controller('RepresentativeController', function ($scope, $routeParams, representativesService) {
  var representativeID;

  $scope.representative = {};

  init();

  function init() {
    // representativeID = ($routeParams.representativeID) ? parseInt($routeParams.representativeID) : 0;
    // $scope.representative = representativesService.getRepresentative(representativeID);
  }
});

app.controller('NavbarController', function ($scope, $location) {
  $scope.getClass = function (path) {
    if ($location.path().substr(0, path.length) == path) {
      return true
    } else {
      return false;
    }
  }
});
