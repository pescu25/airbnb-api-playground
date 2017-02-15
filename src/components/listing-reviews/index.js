
import angular from 'angular';
import uiRouter from 'angular-ui-router';

import ListingReviewsCtrl from './listing-reviews.controller';
import ListingItem from '../listing-item';
import ReviewItem from '../review-item';
import services from '../../services';

import './listing-reviews.scss';

const MODULE_NAME = 'listing-reviews';

let listingReviewsComponent = {
  template  : require('./listing-reviews.html'),
  controller: ListingReviewsCtrl
};

angular.module(MODULE_NAME, [
  services.name,
  ListingItem,
  ReviewItem,
  uiRouter
] )
.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('listings-reviews', {
      url: '/listings-reviews/:id',
      component: 'lpListingReviews'
    });
})
.component('lpListingReviews', listingReviewsComponent)

export default MODULE_NAME;
