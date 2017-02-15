
import angular from 'angular';

import ListingItemCtrl from './listing-item.controller';

import './listing-item.scss';

const MODULE_NAME = 'listing-item';

let listingItemComponent = {
  template  : require('./listing-item.html'),
  controller: ListingItemCtrl,
  bindings  : {
    title     : '<',
    address   : '<',
    img       : '<'
  }
};

angular.module(MODULE_NAME, [])
  .component('lpListingItem', listingItemComponent)

export default MODULE_NAME;
