'use strict';

describe('module: main, controller: VenueCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var VenueCtrl;
  beforeEach(inject(function ($controller) {
    VenueCtrl = $controller('VenueCtrl');
  }));

  it('should do something', function () {
    expect(!!VenueCtrl).toBe(true);
  });

});
