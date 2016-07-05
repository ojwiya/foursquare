'use strict';
angular.module('main')
.service('venueService', function ($log,$http) {
  $log.log('Reached from your Service: Venue in module main');
  this.fetch = function (search) {
    return $http.get('https://api.foursquare.com/v2/venues/explore?near=' + search + '&oauth_token=RUKQBYL4EFOKY1FJ3CS0K5FX4JKP0LBP5UQH1YAJAM0YQJKE&v=20151115');
  };
  
});
