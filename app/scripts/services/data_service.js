'use strict';

/**
 * @ngdoc service
 * @name athenaApp.dataService
 * @description
 * # dataService
 * Service in the athenaApp.
 */
angular.module('mmmangularApp')
  .service('dataService', function($q, $http, $timeout, $window, BASE_API_URL) {

    var dataCache = {
      allProjectsData: null,
      mapProjectsData: null,
      mapData: null
    };

    // this.loadAllData = function() {
    //   var deferred = $q.defer();
    //
    //   // TODO: Somehow if cache is used the jvectormap throws an error. Need to see why.
    //   // dataCache.allProjectsData
    //   if (false) {
    //     deferred.resolve(dataCache.allProjectsData);
    //   } else {
    //     $http({
    //       method: 'POST',
    //       url: BASE_API_URL + '/FetchAllProjectsForUserWithJWT',
    //       headers: {
    //         Authorization: authService.getAPIAuthHeader()
    //       }
    //     }).success(function(data) {
    //       // console.log(data);
    //       dataCache.allProjectsData = data;
    //       deferred.resolve(dataCache.allProjectsData);
    //     });
    //   }
    //
    //   return deferred.promise;
    // };
    //
    // this.getProjectsForMap = function() {
    //   var deferred = $q.defer();
    //
    //   // TODO: Somehow if cache is used the jvectormap throws an error. Need to see why.
    //   // dataCache.mapProjectsData
    //   if (false) {
    //     deferred.resolve(dataCache.mapProjectsData);
    //   } else {
    //     var promise = this.loadAllData();
    //     promise.then(function(data) {
    //       // Return only those projects where the Athena setup is complete.
    //       // This is found by checking if isAthena is True.
    //       dataCache.mapProjectsData = _.where(data, {
    //         isAthena: true
    //       });
    //       deferred.resolve(dataCache.mapProjectsData);
    //     });
    //   }
    //
    //   return deferred.promise;
    // };
    //
    // this.loadMapData = function() {
    //   var deferred = $q.defer();
    //
    //   // TODO: Somehow if cache is used the jvectormap throws an error. Need to see why.
    //   // dataCache.mapData
    //   if (false) {
    //     deferred.resolve(dataCache.mapData);
    //   } else {
    //     var promise = this.getProjectsForMap();
    //     promise.then(function(data) {
    //       // console.log(data);
    //       var mapData = [];
    //       var groupedCountryData = _.groupBy(data, 'countryName');
    //       // console.log(groupedCountryData);
    //       _.each(_.keys(groupedCountryData), function(countryName) {
    //         var countryDataList = groupedCountryData[countryName];
    //         var firstObj = countryDataList[0];
    //         var countryObj = {
    //           name: countryName,
    //           "hc-key": firstObj.countryCode,
    //           cluster: firstObj.clusterName
    //         };
    //         countryObj.projects = _.map(countryDataList, function(
    //           project) {
    //           return {
    //             id: project.projectId,
    //             name: project.categoryName,
    //             validationProjectId: project.validationProjectId
    //           };
    //         });
    //         mapData.push(countryObj);
    //       });
    //       // console.log(mapData);
    //       dataCache.mapData = mapData;
    //       deferred.resolve(dataCache.mapData);
    //     });
    //   }
    //
    //   return deferred.promise;
    // };
    //
    // this.loadMonetData = function() {
    //   // TODO: Need to setup a caching layer for this so that the data gets loaded only once.
    //   var deferred = $q.defer();
    //   $http.post(BASE_API_URL + '/monetData', {
    //     "username": authService.getCurrentUser()
    //   }).success(function(data) {
    //     deferred.resolve(data);
    //   });
    //   return deferred.promise;
    // };
    //
    // this.loadDIDData = function() {
    //   var deferred = $q.defer();
    //   $http.get('did.txt').success(function(data) {
    //     deferred.resolve(data.data);
    //   });
    //   return deferred.promise;
    // };
    this.loadProjectData = function() {
      var deferred = $q.defer();

      $http({
        method: 'POST',
        url: BASE_API_URL + '/ProjectStatus',
        // headers: {
        //   Authorization: authService.getAPIAuthHeader()
        // },
        data: {
          "UserID": "27"
        }
      }).success(function(data) {
         console.log("ProjectStatus : " + data);
        /*var jsonData = {
          structure: jsonStructure[projectId] || data.structure,
          data: data.data
        };
        deferred.resolve(jsonData);*/
        deferred.resolve(data);
      });

      return deferred.promise;
    };

    // this.loadSimulatorData = function(projectId) {
    //   var deferred = $q.defer();
    //   $http.post(  url: BASE_API_URL + '/ProjectStatus', {
    //     "UserID": "27"
    //   }).success(function(data) {
    //     console.log("loadSimulatorData data : "+data);
    //     deferred.resolve(data);
    //   });
    //   return deferred.promise;
    // };

    // this.simulatorVariableChanged = function(simulatorSessionKey,
    //   simProjectId, brandID, varID, sliderValue, brandFlag, isCPRP) {
    //   var deferred = $q.defer();
    //   $http.post(SIM_API_BASE_URL + '/AthenaSliderChange', {
    //     simulatorSessionKey: simulatorSessionKey,
    //     projectID: simProjectId,
    //     brandID: brandID,
    //     varID: varID,
    //     sliderValue: sliderValue,
    //     brandFlag: brandFlag,
    //     isCPRP: isCPRP
    //   }).success(function(data) {
    //     deferred.resolve(data);
    //   });
    //   return deferred.promise;
    // };
    //
    // this.loadGMImpactBrands = function(gmImpactProjectId) {
    //   var deferred = $q.defer();
    //   $http.post(GMI_API_BASE_URL + '/getBrandDetails', {
    //     "projectId": gmImpactProjectId
    //   }).success(function(data) {
    //     deferred.resolve(data);
    //   });
    //   return deferred.promise;
    // };
    //
    // this.fetchGMImpact = function(reqData) {
    //   var deferred = $q.defer();
    //   $http.post(GMI_API_BASE_URL + '/gmImpactCalc', reqData).success(
    //     function(data) {
    //       deferred.resolve(data[0]); // TODO: Remove array for the response data from web-service.
    //     });
    //   return deferred.promise;
    // };
    //
    // this.loadIRISimulator = function(projectId) {
    //   var deferred = $q.defer();
    //   $http.post(IRISIM_API_BASE_URL + '/getbrands', {
    //     "projectId": projectId
    //   }).success(function(data) {
    //     deferred.resolve(data);
    //   });
    //   return deferred.promise;
    // };
    //
    // this.computeIRISimulator = function(inputs) {
    //   // console.log(inputs);
    //   var deferred = $q.defer();
    //   if (inputs === []) {
    //     deferred.resolve(null);
    //   } else {
    //     $http.post(IRISIM_API_BASE_URL + '/getimpact', inputs).success(
    //       function(data) {
    //         // console.log(data);
    //
    //         var initImpactObject = function() {
    //           return angular.copy({
    //             volume: 0,
    //             value: 0,
    //             volumeMS: 0,
    //             valueMS: 0
    //           });
    //         };
    //
    //         var computeImpact = function(obj) {
    //           return {
    //             volume: Math.round(((obj.newVolume - obj.currentVolume) /
    //               obj.currentVolume * 100) * 100) / 100,
    //             value: Math.round(((obj.newValue - obj.currentValue) /
    //               obj.currentValue * 100) * 100) / 100,
    //             volumeMS: Math.round((obj.newVolumeShare - obj.currentVolumeShare) *
    //               10000),
    //             valueMS: Math.round((obj.newValueShare - obj.currentValueShare) *
    //               10000)
    //           }
    //         };
    //
    //         var computeMediaImpact = function(obj, priceObj) {
    //           return {
    //             volume: Math.round(((obj.newVolume - obj.currentVolume) /
    //               priceObj.currentVolume * 100) * 100) / 100,
    //             value: Math.round(((obj.newValue - obj.currentValue) /
    //               priceObj.currentValue * 100) * 100) / 100,
    //             volumeMS: Math.round((obj.newVolumeShare - obj.currentVolumeShare) *
    //               10000),
    //             valueMS: Math.round((obj.newValueShare - obj.currentValueShare) *
    //               10000)
    //           }
    //         };
    //
    //         var prepImpactObject = function(obj, priceObj) {
    //           if (obj.currentVolume != 0) {
    //             if (priceObj === undefined) {
    //               return _.extend(obj, computeImpact(obj));
    //             } else {
    //               return _.extend(obj, computeMediaImpact(obj, priceObj));
    //             }
    //           } else {
    //             return _.extend(obj, initImpactObject());
    //           }
    //         };
    //
    //         var computeTotalImpact = function(obj) {
    //           return {
    //             volume: Math.round((obj.priceImpact.volume + obj.tvImpact
    //               .volume + obj.digitalImpact.volume + obj.outdoorImpact
    //               .volume + obj.printImpact.volume + obj.prImpact.volume +
    //               obj.otherImpact.volume) * 100) / 100,
    //             value: Math.round((obj.priceImpact.value + obj.tvImpact
    //               .value + obj.digitalImpact.value + obj.outdoorImpact
    //               .value + obj.printImpact.value + obj.prImpact.value +
    //               obj.otherImpact.value) * 100) / 100,
    //             volumeMS: Math.round((obj.priceImpact.volumeMS + obj.tvImpact
    //               .volumeMS + obj.digitalImpact.volumeMS + obj.outdoorImpact
    //               .volumeMS + obj.printImpact.volumeMS + obj.prImpact
    //               .volumeMS + obj.otherImpact.volumeMS) * 100) / 100,
    //             valueMS: Math.round((obj.priceImpact.valueMS + obj.tvImpact
    //               .valueMS + obj.digitalImpact.valueMS + obj.outdoorImpact
    //               .valueMS + obj.printImpact.valueMS + obj.prImpact
    //               .valueMS + obj.otherImpact.valueMS) * 100) / 100
    //           };
    //         };
    //
    //         var brands = data.brands;
    //         brands = _.map(brands, function(obj) {
    //           obj.priceImpact = prepImpactObject(obj.priceImpact);
    //           obj.tvImpact = prepImpactObject(obj.tvImpact, obj.priceImpact);
    //           obj.digitalImpact = prepImpactObject(obj.digitalImpact,
    //             obj.priceImpact);
    //           obj.outdoorImpact = prepImpactObject(obj.outdoorImpact,
    //             obj.priceImpact);
    //           obj.printImpact = prepImpactObject(obj.printImpact, obj
    //             .priceImpact);
    //           obj.prImpact = prepImpactObject(obj.prImpact, obj.priceImpact);
    //           obj.otherImpact = prepImpactObject(obj.otherImpact, obj
    //             .priceImpact);
    //           obj.totalImpact = _.extend(obj.totalImpact,
    //             computeTotalImpact(obj));
    //           return obj;
    //         });
    //         data.brands = brands;
    //
    //         var portfolio = data.portfolio;
    //         portfolio.priceImpact = prepImpactObject(portfolio.priceImpact);
    //         portfolio.tvImpact = prepImpactObject(portfolio.tvImpact,
    //           portfolio.priceImpact);
    //         portfolio.digitalImpact = prepImpactObject(portfolio.digitalImpact,
    //           portfolio.priceImpact);
    //         portfolio.outdoorImpact = prepImpactObject(portfolio.outdoorImpact,
    //           portfolio.priceImpact);
    //         portfolio.printImpact = prepImpactObject(portfolio.printImpact,
    //           portfolio.priceImpact);
    //         portfolio.prImpact = prepImpactObject(portfolio.prImpact,
    //           portfolio.priceImpact);
    //         portfolio.otherImpact = prepImpactObject(portfolio.otherImpact,
    //           portfolio.priceImpact);
    //         portfolio.totalImpact = _.extend(portfolio.totalImpact,
    //           computeTotalImpact(portfolio));
    //         data.portfolio = portfolio;
    //
    //         deferred.resolve(data);
    //       });
    //   }
    //   return deferred.promise;
    // };
    //
    // this.loadJsonValidation = function(projectId) {
    //   if (projectId) {
    //     window.open(ADMIN_JSON_VALIDATION_LINK +
    //       '?username=ramesh&password=ramesh&projectId=' + projectId,
    //       '_blank');
    //     return;
    //   } else {
    //     window.open(GLOBAL_WIP_URL, '_blank');
    //     return;
    //   }
    // };
    //
    // this.loadJsonAutomation = function(projectId) {
    //   $window.open(ADMIN_JSON_AUTOMATION_LINK +
    //     '?userName=ramesh&password=ramesh&projectId=' + projectId,
    //     '_blank');
    //   return;
    // };
    //
    // this.loadClientEditTool = function() {
    //   $window.open(CLIENTADMIN_EDIT_TOOL_LINK, '_blank');
    //   return;
    // };
    //
    // // forcasting
    // this.loadForecastingData = function(projectId) {
    //   var deferred = $q.defer();
    //   $http.post(FORECAST_API_BASE_URL + '/loadFCTSimulator', {
    //     "projectID": projectId
    //   }).success(function(data) {
    //     deferred.resolve(data);
    //   });
    //   return deferred.promise;
    // };
    //
    // this.simulateForecastingData = function(sessionKey, projectId, categoryId,
    //   variableId, sliderValue) {
    //
    //   var deferred = $q.defer();
    //   $http.post(FORECAST_API_BASE_URL + '/sliderChangeFCT', {
    //     "projectID": projectId,
    //     "categoryID": categoryId,
    //     "varID": variableId,
    //     "sliderValue": sliderValue,
    //     "categoryFlag": true,
    //     "simulatorSessionKey": sessionKey
    //   }).success(function(data) {
    //     deferred.resolve(data);
    //   });
    //   return deferred.promise;
    //
    // };
  });
