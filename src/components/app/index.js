
import angular from 'angular';
import uiRouter from 'angular-ui-router';

import AppCtrl from './app.controller';
import Listings from '../listings';
import ListingReviews from '../listing-reviews';

import '../../styles/main.scss';
import './app.scss';

const MODULE_NAME = 'app';

let appComponent = {
  template  : require('./app.html'),
  controller: AppCtrl
};

angular.module(MODULE_NAME, [ Listings, ListingReviews, uiRouter ] )
.config(($locationProvider, $urlRouterProvider) => {
  "ngInject";
  $locationProvider;
})
.component('app', appComponent)

export default MODULE_NAME;
