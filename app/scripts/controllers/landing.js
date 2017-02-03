'use strict';

/**
 * @ngdoc function
 * @name mmmangularApp.controller:LandingCtrlLandingCtrlLandingCtrlLandingCtrl
 * @description
 * # LandingCtrlLandingCtrl
 * Controller of the mmmangularApp
 */
angular.module('mmmangularApp')
  .controller('LandingCtrl', function ($scope, $timeout, $routeParams, dataservice,DTOptionsBuilder, DTColumnBuilder) {
      $scope.projectId = 901;
      $scope.UserID = 27;
      $scope.projectData ="";
    var vm = this;
    $scope.setInitialValues = function() {
    var promise = dataservice.loadProjectData();
    promise.then(function(data) {
        $scope.projectData = data;
        vm.results=data;
        /*$timeout(function() {
          console.log('before');
          angular.element('#charts-slider').get(0).slick.setPosition();
          console.log('after');
        }, 1000);*/
      });
    };
      debugger
    console.log('promise : '+$scope.projectData +"_"+ results.data);
  });
