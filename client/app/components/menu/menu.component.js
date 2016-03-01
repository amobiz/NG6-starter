import template from './menu.html';
import controller from './menu.controller';
import './menu.css';

let menuComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default menuComponent;
