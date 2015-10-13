'use strict';

describe('Service: localWeather', function () {

  // load the service's module
  beforeEach(module('weatherApp'));

  // instantiate service
  var localWeather;
  beforeEach(inject(function (_localWeather_) {
    localWeather = _localWeather_;
  }));

  it('should do something', function () {
    expect(!!localWeather).toBe(true);
  });

});
