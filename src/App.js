import React from 'react';
import './App.css';
import MapComponent from './MapComponent';
import Menu from './Menu';
 
const locations = [
  {
    title: "McDonald's",
    location: { lat: -22.192114, lng: -49.960094 },
    type: 'restaurant'
  },
  {
    title: 'Old Dog Dogueria',
    location: { lat: -22.193228, lng: -49.961687 },
    type: 'restaurant'
  },
  {
    title: 'Alvorada Churrascaria',
    location: { lat: -22.190681, lng: -49.96325 },
    type: 'restaurant'
  },
  {
    title: 'Hotel Aquarius de Marília',
    location: { lat: -22.187372, lng: -49.961643 },
    type: 'hotel'
  },
  {
    title: 'Travel Inn Marília',
    location: { lat: -22.183034, lng: -49.963731 },
    type: 'hotel'
  },
  {
    title: 'Auto Posto Alvorada de Marília Ltda',
    location: { lat: -22.19172, lng: -49.959906 },
    type: 'gas'
  },
  {
    title: 'Posto Aquarius - GNV',
    location: { lat: -22.187565, lng: -49.967719 },
    type: 'gas'
  }
];
 
class MapsApp extends React.Component {
  state = {
    query: '',
    //pensei em usar um novo estado pq shoingPlaces traz apenas place.title - me corrija se estiver errado
    filteredPlaces: locations
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }
  clearQuery = () => {
    this.setState({ query: '' })
  }
  
  render() {
  
    return (
      <div className="app">
        <Menu 
          query={this.state.query}
          filteredPlaces={this.state.filteredPlaces}
          updateQuery={this.updateQuery}
        />
        <MapComponent
          places={this.state.filteredPlaces}
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