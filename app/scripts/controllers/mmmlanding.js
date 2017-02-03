'use strict';

/**
 * @ngdoc function
 * @name mmmangularApp.controller:MmmlandingCtrl
 * @description
 * # MmmlandingCtrl
 * Controller of the mmmangularApp
 */
angular.module('mmmangularApp')
  .controller('MmmlandingCtrl', function($scope, dataservice,DTOptionsBuilder) {
    //var vm = this;
    $scope.projectDatas = "projectDatas initial value";
    $scope.projectDatadata = "check";
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.setInitialValues = function() {
      var promise = dataservice.loadProjectData("27");
      promise.then(function(data) {
        $scope.projectDatadata = data;
        $scope.bindMainGrid();
      });
    };
    $scope.setInitialValues();
    $scope.bindMainGrid = function() {

    };
    $scope.dtInstance ={
    "id": "foobar",
    "DataTable": oTable,
    "dataTable": $oTable//,
    //"reloadData": function(callback, resetPaging),
    //"changeData": function(newData),
    //"rerender": function()
};
    $scope.dtOptions = DTOptionBuilder.newOptions()
        .withOptions('autoWidth', fnThatReturnsAPromise);

    // var dataSet = [
    //   ["Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011 / 04 / 25", "$320, 800"],
    //   ["Garrett Winters", "Accountant", "Tokyo", "8422", "2011 / 07 / 25", "$170, 750"]
    // ];
    // $scope.options = {
    //   data: dataSet,
    //   columns: [{
    //       title: "Name"
    //     },
    //     {
    //       title: "Position"
    //     },
    //     {
    //       title: "Office"
    //     },
    //     {
    //       title: "Extn."
    //     },
    //     {
    //       title: "Start date"
    //     },
    //     {
    //       title: "Salary"
    //     }
    //   ]
    //};


  });
