'use strict';
angular.module('main')
.controller('VenueCtrl', function ($log) {

  $log.log('Hello from your Controller: VenueCtrl in module main:. This is your controller:', this);
  
  
  var pendingTask;
    
    this.getVenues = function(){
        
        //validate
          this.validate();
        
        //search
          this.fetchData();

    }
    
    //If the model is blank then populate
    this.validate = function(){
        if (!this.search) {
            this.search = "kilburn";
            fetch();
        }
    }


    //Listen on change 
    this.change = function() {
      if (pendingTask) {
        clearTimeout(pendingTask);
      }
      //TImeout to 800ms to avoid too many requests
      pendingTask = setTimeout(fetch, 800);
    };



    //Get response from server  
    this.fetch = function() {
      $http.get("https://api.foursquare.com/v2/venues/explore?near=" + this.search + "&oauth_token=RUKQBYL4EFOKY1FJ3CS0K5FX4JKP0LBP5UQH1YAJAM0YQJKE&v=20151115")
        .success(function(response) {
          console.log(response.response.groups);
          this.details = response.response;
        });
    }

    
});
