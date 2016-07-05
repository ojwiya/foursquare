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
            .then(function (response) {
                vm.details = response.data.response;
                return vm.details;
            });
    };
    
   vm.activate = function () {
        //If the model is blank then populate
        if (!vm.search) {
         vm.search = 'kilburn';
        }
        return vm.fetch(vm.search).then(function () {
            $log.log('Activated venues View');
        });
    };
  
    //Stop the ion-refresher from spinning
  //vm.$broadcast('scroll.refreshComplete');
      
  vm.activate();
   
});
