'use strict';
angular.module('main', [
  'ionic',
  'ngCordova',
  'ui.router'
])
.config(function ($stateProvider, $urlRouterProvider) {

  // ROUTING with ui.router
  $urlRouterProvider.otherwise('/main/list');
  $stateProvider
    // this state is placed in the <ion-nav-view> in the index.html
    .state('main', {
      url: '/main',
      abstract: true,
      templateUrl: 'main/templates/tabs.html'
    })
      .state('main.list', {
        url: '/list',
        views: {
          'tab-list': {
            templateUrl: 'main/templates/list.html',
            controller: 'VenueCtrl as ctrl'
          }
        }
      })
      .state('main.listDetail', {
        url: '/list/detail',
        views: {
          'tab-list': {
            templateUrl: 'main/templates/list-detail.html',
            controller: 'VenueCtrl as ctrl'
          }
        }
      })
      .state('main.settings', {
        url: '/settings',
        views: {
          'tab-settings': {
            templateUrl: 'main/templates/settings.html'
            //controller: 'SettingsCtrl as ctrl'
          }
        }
      });
});

'use strict';
angular.module('main')
.service('venueService', function ($log,$http) {
  $log.log('Reached from your Service: Venue in module main');
  this.fetch = function (search) {
    return $http.get('https://api.foursquare.com/v2/venues/explore?near=' + search + '&oauth_token=RUKQBYL4EFOKY1FJ3CS0K5FX4JKP0LBP5UQH1YAJAM0YQJKE&v=20151115');
  };
  
});

'use strict';
angular.module('main')
.service('Main', function ($log, $timeout) {

  $log.log('Hello from your Service: Main in module main');

  // some initial data
  this.someData = {
    binding: 'Yes! Got that databinding working'
  };

  this.changeBriefly = function () {
    var initialValue = this.someData.binding;
    this.someData.binding = 'Yeah this was changed';

    var that = this;
    $timeout(function () {
      that.someData.binding = initialValue;
    }, 500);
  };

});

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

'use strict';
angular.module('main')
.constant('Config', {

  // gulp environment: injects environment vars
  ENV: {
    /*inject-env*/
    'SERVER_URL': 'https://DEVSERVER/api',
    'SOME_OTHER_URL': '/proxy'
    /*endinject*/
  },

  // gulp build-vars: injects build vars
  BUILD: {
    /*inject-build*/
    /*endinject*/
  }

});

'use strict';
angular.module('foursquareVenues', [
  // load your modules here
  'main', // starting with the main module
]);
