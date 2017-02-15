
class ListingReviewsCtrl {
  constructor( airbnbService, $stateParams ) {
    Object.assign( this, { airbnbService, $stateParams } );

    this.listingId = $stateParams.id;
    this.listing = false;
    this.reviews = [];
  }

  processListing( listing ) {
    this.listing = listing;

    return this.airbnbService.fetchReviews( listing.id );
  }

  processReviews( reviews ) {
    this.reviews = reviews;
  }

  $onInit() {
    this.airbnbService.fetchListingById ( this.listingId )
      .then( listing => this.processListing( listing ) )
      .then( reviews => this.processReviews( reviews ) )
      .catch( err => console.log( 'snap! something broke', err ) );
  }
}

ListingReviewsCtrl.$inject = [ 'airbnbService', '$stateParams' ];

export default ListingReviewsCtrl;
