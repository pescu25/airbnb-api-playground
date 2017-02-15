
import { API_KEY, BASE_API_URL } from '../config';

class AirbnbService {
  constructor( $http ) {
    Object.assign( this, { $http } );
  }

  makeApiCall( url, params ) {
    params.client_id = API_KEY;

    return this.$http( {
      method  : "GET",
      url,
      params
    } );
  }

  fetchListings( location ) {
    const url = `${BASE_API_URL}/search_results`;
    const params = { location };

    return this.makeApiCall( url, params )
      .then( res => res.data )
      .then( data => data.search_results )
  }

  fetchListingById( id ) {
    const url = `${BASE_API_URL}/listings/${id}`;
    const params = { _format : 'v1_legacy_for_p3' };

    return this.makeApiCall( url, params )
      .then( res => res.data )
      .then( data => data.listing )
  }

  fetchReviews( listingId ) {
    const url = `${BASE_API_URL}/reviews`;
    const params = { listing_id : listingId, role : 'all' };

    return this.makeApiCall( url, params )
      .then( res => res.data )
      .then( data => data.reviews )
  }
}

AirbnbService.$inject = ['$http'];

export default AirbnbService;
