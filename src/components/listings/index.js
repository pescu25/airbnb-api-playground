
import angular from 'angular';
import uiRouter from 'angular-ui-router';

import ListingsCtrl from './listings.controller';
import ListingItem from '../listing-item';
import services from '../../services';

import './listings.scss';

const MODULE_NAME = 'listings';

let listingsComponent = {
  template  : require('./listings.html'),
  controller: ListingsCtrl
};

angular.module(MODULE_NAME, [
  services.name,
  ListingItem,
  uiRouter
] )
.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('listings', {
      url: '/listings',
      component: 'lpListings'
    });
})
.component('lpListings', listingsComponent)

export default MODULE_NAME;
