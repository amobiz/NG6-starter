import angular from 'angular';
import UserFactory from './user.factory';

let userModule = angular.module('app.user', [])

.factory('User', UserFactory);

export default userModule;
