'use strict';

describe('Debug page', function () {

  beforeEach(function () {
    browser.get('/#/main/list');
  });

  it('should search for venues', function () {

    var placeInput = element(by.model('ctrl.search'));
    
    var venues = element(by.model('ctrl.details'));
    
    var search_button = element(by.id('add_car'));
  add_car_btn.click() 

    //data retrieved
    placeInput.sendKeys('kilburn');
    expect(venues).not.toBeUndefined();
    expect(venues.length).toBeGreaterThan(0);

  });
});
