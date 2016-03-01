import template from './app.html';
import controller from './app.controller';
import './app.css';

let appComponent = {
  template,
  restrict: 'E',
  controller,
  controllerAs: 'vm'
};

export default appComponent;
