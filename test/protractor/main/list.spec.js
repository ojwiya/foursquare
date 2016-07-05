'use strict';

describe('list venues page', function () {

  beforeEach(function () {
    browser.get('/#/main/list');
  });

  it('should search for venues', function () {
    var placeInput = element(by.model('ctrl.search'));
    var venues = element(by.model('ctrl.details'));
    //var searchBtn = element(by.id('btn_getVenues'));
    //data retrieved
    placeInput.sendKeys('kilburn');
    expect(venues).not.toBeUndefined();
    expect(venues.length).toBeGreaterThan(0);
  });
  
});