'use strict';

/**
 * @ngdoc service
 * @name mmmangularApp.dataservice
 * @description
 * # dataservice
 * Service in the mmmangularApp.
 */
angular.module('mmmangularApp')
  .service('dataservice', function($q, $http, $timeout, $window, BASE_API_URL) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var dataCache = {
      allProjectsData: null,
      mapProjectsData: null,
      mapData: null
    };

    this.loadProjectData = function(ct) {
      var deferred = $q.defer();
      $http({
        method: 'POST',
        url: BASE_API_URL + '/ProjectStatus',
        data: {
          "UserID": ct
        }
      }).then(function successCallback(response) {
        deferred.resolve(response.data);
      }, function errorCallback(response) {
      });
      return deferred.promise;
    };
  });
