import angular from 'angular';
import uiRouter from 'angular-ui-router';
import settingsComponent from './settings.component';

let settingsModule = angular.module('app.components.settings', [
  uiRouter
])
.config(($stateProvider) => {
  'ngInject';

  $stateProvider
    .state('settings', {
      url: '/settings',
      template: '<settings></settings>'
    });
})
.component('settings', settingsComponent);

export default settingsModule;
