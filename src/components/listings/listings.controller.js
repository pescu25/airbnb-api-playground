
class ListingsCtrl {
  constructor( airbnbService ) {
    this.cities = [ 'London', 'Paris', 'Tel Aviv', 'NYC' ];
    this.selectedCity = '';

    this.listingsCache = {};
    Object.assign( this, { airbnbService } );
  }

  getCityListings() {
    const city = this.selectedCity;

    if( this.listingsCache[city] ) {
      return this.listingsCache[city];
    }

    this.airbnbService.fetchListings( city )
      .then( listings => this.listingsCache[city] = listings )
      .catch( err => console.log( 'snap! something broke', err ) );
  }
}

ListingsCtrl.$inject = [ 'airbnbService' ];

export default ListingsCtrl;
