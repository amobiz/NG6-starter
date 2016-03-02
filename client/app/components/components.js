import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Settings from './settings/settings';

let componentModule = angular.module('app.components', [
  Home.name,
  About.name,
  Settings.name
]);

export default componentModule;
