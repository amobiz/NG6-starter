import angular from 'angular';
import uiRouter from 'angular-ui-router';
import heroComponent from './hero.component';

let heroModule = angular.module('app.hero', [
  uiRouter
])

.component('hero', heroComponent);

export default heroModule;
