'use strict';
angular.module('main')
.controller('VenueCtrl', function ($log,venueService) {

  $log.log('Hello from your Controller: VenueCtrl in module main:. This is your controller:', this);
  var pendingTask;
  var vm = this;
  //Listen on change 
 vm.getVenues = function () {
     if (pendingTask) {
     clearTimeout(pendingTask);
     }
     //TImeout to 800ms to avoid too many requests
     pendingTask = setTimeout(vm.fetch, 800);
  };

  vm.fetch = function () {
        return venueService.fetch(vm.search)
            .then(function (data) {
                vm.details = data.response;
                return vm.details;
            });
    };
    
//Get response from server  
// vm.fetch1 = function () {
//     $http.get('https://api.foursquare.com/v2/venues/explore?near=' + vm.search + '&oauth_token=RUKQBYL4EFOKY1FJ3CS0K5FX4JKP0LBP5UQH1YAJAM0YQJKE&v=20151115')
//         .success(function (response) {
//           //console.log(response.response.groups);
//         vm.details = response.response;
//         });
//   };
  
   vm.activate = function () {
        //If the model is blank then populate
        if (!this.search) {
         vm.search = 'kilburn';
         vm.fetch();
        }
        return vm.fetch(vm.search).then(function () {
            $log.log('Activated venues View');
        });
    };
  
   vm.activate();
});
