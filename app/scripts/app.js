'use strict';

/**
 * @ngdoc overview
 * @name mmmangularApp
 * @description
 * # mmmangularApp
 *
 * Main module of the application.
 */
angular
  .module('mmmangularApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch','datatables'
  ])
  .constant('BASE_API_URL',
    'http://apps.gaintheory.tools/MMMWCFTEST/Service1.svc')
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/Landing', {
        templateUrl: 'views/Landing.html',
        //controller: 'LandingCtrl',
        //controllerAs: 'landing'
      })
      .when('/MMMLanding', {
        templateUrl: 'views/mmmlanding.html',
        //controller: 'MmmlandingCtrl',
      //controllerAs: 'MMMLanding'
      })
      .otherwise({
        redirectTo: '/'
      });
      $locationProvider.hashPrefix('');
  });
