'use strict';

describe('module: main, controller: VenueCtrl', function () {
  // load the controller's module
  beforeEach(function () {
    var mockVenueService = {};
    module('main', function ($provide) {
      $provide.value('venueService', mockVenueService);
    });
    
    inject(function ($q) {
      
      mockVenueService.data =  [ 
        {
          name: 'name1', rating: 3413213, stats: {usersCount: 235465}
         },
        {
          name: 'name2', rating: 3615, stats: {usersCount: 252136}
         }
         ];
      
       mockVenueService.fetch = function () {
        var defer = $q.defer();
        
        defer.resolve(this.data);
        
        return defer.promise;
      };
    });
  });
  
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));
  // instantiate controller
  var VenueCtrl;
  beforeEach(inject(function ($controller, _venueService_) {
    var venueService = _venueService_;
    VenueCtrl = $controller('VenueCtrl',{venueService: venueService});
    VenueCtrl.activate();
  }));

  it('should do something', function () {
    expect(!!VenueCtrl).toBe(true);
  });
  
  it('should default search to kilburn', function () {
    expect(VenueCtrl.search).toBe('kilburn');
  });
  
  it('should return venue list', function () {
    expect(VenueCtrl.details).not.toBeUndefined();
    expect(VenueCtrl.details).toEqual([
        {
          name: 'name', rating: 3413213, stats: {usersCount: 235465}
         },
        {
          name: 'name2', rating: 3615, stats: {usersCount: 252136}
         }
         ]);

  });
  
});
