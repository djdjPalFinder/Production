/**
  * @class initializeMap
  * @description Controller for Google Maps. Makes use of databaseAndAuth factory in order to retrieve/update chat messages from the databse. Listens for any changes in $rootScope (broadcasted by services), and then takes in the new (broadcasted) data and applies it to $scope
*/

angular.module('myApp').controller('initializeMap', function($scope, databaseAndAuth, NgMap) {


  $scope.$on('user:updatedOrAdded', function(event, data) {
    $scope.userLocations[data[0]] = data[1];
    console.log('user location added or updated', data[1]);
    $scope.$apply();
  });

  $scope.$on('user:loggedOut', function(event, data) {
    $scope.userLocations = undefined;
    $scope.$apply();
  });

  $scope.$on('user:logIn', function(event, data) {
    $scope.userLocations = databaseAndAuth.users;
    // console.log('databaseanauth.users', databaseAndAuth.users);
    $scope.$apply();
  });

  var allUsers = databaseAndAuth.users;


  NgMap.getMap().then(function(map) {
    // console.log('allUsers', allUsers);
    // for (var key in allUsers) {
    //   console.log('cycling in for in')
    //   if (allUsers[key].team === 'blue') {
    //     console.log('teamblue');

    //     // set the pin color to blue
    //     var pinColor = "1A1AFF";
    //     // constructor for the pin image
    //     var pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor,
    //        new google.maps.Size(21, 34),
    //        new google.maps.Point(0,0),
    //        new google.maps.Point(10, 34));

          //map.customMarkers.blue.setIcon(icon: pinImage);

          // // constructor for new marker, sets new marker
          // var marker = new google.maps.Marker({
          // map: map,
          // icon: pinImage
          // });

      // }
  //   };
  });

});
