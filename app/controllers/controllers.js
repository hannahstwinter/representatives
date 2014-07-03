app.controller('RepsController', function ($rootScope, $scope, repsService) {
  init();

  function init() {
    repsService.getReps(function (dataResponse) {
      $rootScope.representatives = dataResponse.objects;
    });
  }
});

app.controller('RepController', function ($rootScope, $scope, $routeParams, repsService) {
  var representativeID;

  init();

  function init() {
    representativeID = $routeParams.representativeID;
    $scope.representative = repsService.getRep(
      representativeID,
      function (dataResponse) {
        $scope.representative = dataResponse;
        $scope.firstname = $scope.representative.person.firstname;
      }
    );
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
