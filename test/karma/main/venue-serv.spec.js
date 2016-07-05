'use strict';

describe('module: main, service: Venue', function () {

  // load the service's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate service
  var Venue;
  beforeEach(inject(function (_Venue_) {
    Venue = _Venue_;
  }));

  it('should do something', function () {
    expect(!!Venue).toBe(true);
  });

});
