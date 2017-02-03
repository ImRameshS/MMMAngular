'use strict';

describe('Controller: MmmlandingCtrl', function () {

  // load the controller's module
  beforeEach(module('mmmangularApp'));

  var MmmlandingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MmmlandingCtrl = $controller('MmmlandingCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MmmlandingCtrl.awesomeThings.length).toBe(3);
  });
});
