import React from 'react';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';
import Places from './Places'; 
import './App.css';
import * as FoursquareAPI from './FoursquareAPI'
import MapComponent from './MapComponent';
import Menu from './Menu';

class MapsApp extends React.Component {
  state = {
    photosID: [],
    query: '',
    locations: Places,
    showingPlaces: Places,
    placeToShow: '',
    isOpen: true
  };


  updateQuery = query => {
    const { locations } = this.state;
    let showingPlaces = [];
 
    this.setState({ query: query.trim() });
 
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i');
      showingPlaces = locations.filter(place => match.test(place.title));
    } else {
      showingPlaces = locations;
    }
 
    showingPlaces.sort(sortBy('title'));

    this.setState({ showingPlaces });
  };
  
  clearQuery = () => {
    this.setState({ query: '' });
    this.setState({ showingPlaces: this.state.locations})   
  };

  selectPlace = placeToShow => {
    this.setState({
      placeToShow,
      isOpen: true
    });
  };

  closeInfoWindow = () => {
    this.setState({
      placeToShow: '',
      isOpen: false
    });
  };

  render() {
    const { query, showingPlaces, placeToShow, isOpen } = this.state;
    return (
      <div className="app">
        <Menu
          query={query}
          updateQuery={this.updateQuery}
          clearQuery={this.clearQuery}
          showingPlaces={showingPlaces}
          allPlaces={this.state.locations}
          selectPlace={this.selectPlace}
        />
        <MapComponent
          places={showingPlaces}
          placeTitle={placeToShow}
          isOpen={isOpen}
          selectPlace={this.selectPlace}
          closeInfoWindow={this.closeInfoWindow}
          containerElement={
            <main className="map" role="application" tabIndex="0" />
          }
          mapElement={<div style={{ height: `100%` }} />}
          loadingElement={<div style={{ height: `100%` }} />}
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDuz98Ss0AjqLfiSvMAUJbTy29zm64jpm4&v=3`}
        />
      </div>
    );
  }
}
 
export default MapsApp;
