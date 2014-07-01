//This handles retrieving data and is used by controllers. 3 options (server, factory, provider) with
//each doing the same thing just structuring the functions/data differently.
app.service('representativesService', function ($http) {
  var representatives;

  representatives = {};

  this.getRepresentatives = function () {
    $http({method: 'GET', url: 'https://www.govtrack.us/api/v2/role?current=true'}).
    success(function(data, status, headers, config) {
      debugger;
      representatives = data.objects;
    }).
    error(function(data, status, headers, config) {
      debugger;
    });

    return representatives;
  };

  // this.getRepresentative = function (id) {
  //     for (var i = 0; i < representatives.length; i++) {
  //         if (representatives[i].id === id) {
  //             return representatives[i];
  //         }
  //     }
  //     return null;
  // };
});
