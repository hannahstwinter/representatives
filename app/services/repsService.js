app.service('repsService', function ($http, $rootScope) {
  var reps;

  this.getReps = function (callItBack) {
    $http({method: 'GET', url: 'https://www.govtrack.us/api/v2/role?current=true'}).
    success(function(data, status, headers, config) {
      callItBack(data);
    }, this).
    error(function(data, status, headers, config) {
    });
  };

  this.getRep = function (repID, callItBack) {
    reps = $rootScope.representatives;

    for (var i = 0; i < reps.length; i++) {
      if (reps[i].person.id == repID) {
        callItBack(reps[i]);
      }
    }
    return null;
  };
});
