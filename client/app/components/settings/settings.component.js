import template from './settings.html';
import controller from './settings.controller';
import './settings.css';

let settingsComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default settingsComponent;
