import React from 'react';
import './App.css';
import MapComponent from './MapComponent'
// import PlaceInfo from './PlaceInfo'
import Menu from './Menu'


const locations = [
  {title: "McDonald's", location: {lat: -22.192114, lng: -49.960094}, type: "restaurant"},
  {title: "Old Dog Dogueria", location: {lat: -22.193228, lng: -49.961687}, type: "restaurant"},
  {title: "Alvorada Churrascaria", location: {lat: -22.190681, lng: -49.963250}, type: "restaurant"},
  {title: "Hotel Aquarius de Marília", location: {lat: -22.187372, lng: -49.961643}, type: "hotel"},
  {title: "Travel Inn Marília", location: {lat: -22.183034, lng: -49.963731}, type: "hotel"},
  {title: "Auto Posto Alvorada de Marília Ltda", location: {lat: -22.191720, lng: -49.959906}, type: "gas"},
  {title: "Posto Aquarius - GNV", location: {lat: -22.187565, lng: -49.967719}, type: "gas"}
];

class MapsApp extends React.Component {

  render() {
    return (
      <div className="app">
        <MapComponent places={locations}
        />
        <Menu places={locations}/>
      </div>
    )
  }

}

export default MapsApp

