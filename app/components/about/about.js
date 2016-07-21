import angular from 'angular';
import uiRouter from 'angular-ui-router';

import aboutComponent from './about.component';

let aboutModule = angular.module('about', [
  uiRouter
  ])
  .config(($stateProvider, $urlRouterProvider) => {
    "ngInject";
    
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('about', {
        url: '/about',
        component: 'about'
      });
  })
  .component('about', aboutComponent).name;

export default aboutModule;
