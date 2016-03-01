import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Menu from './menu/menu';

let componentModule = angular.module('app.components', [
  Home.name,
  About.name,
  Menu.name
]);

export default componentModule;
