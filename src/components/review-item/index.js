
import angular from 'angular';

import ReviewItemCtrl from './review-item.controller';

import './review-item.scss';

const MODULE_NAME = 'review-item';

let reviewItemComponent = {
  template  : require('./review-item.html'),
  controller: ReviewItemCtrl,
  bindings  : {
    author     : '<',
    comment    : '<'
  }
};

angular.module(MODULE_NAME, [])
  .component('lpReviewItem', reviewItemComponent)

export default MODULE_NAME;
