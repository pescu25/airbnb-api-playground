
import angular from 'angular';

import AirbnbService from './airbnb';

const MODULE_NAME = "app.services";
const services = angular.module( MODULE_NAME, [] );

services.service( 'airbnbService', AirbnbService );

export default services;
