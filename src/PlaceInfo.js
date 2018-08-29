import React, { Component } from 'react';
import { Marker, InfoWindow } from 'react-google-maps';
import chef from './img/chef-icon.png';
import hotel from './img/hotel-icon.png';
import gas from './img/gas-station.png';
 
class PlaceInfo extends Component {
  state = {
    placeIcon: ''
  };
 
  componentDidMount() {
    this.mountIcons();
  }
 
  mountIcons = () => {
    const { place } = this.props;
    if (place.type === 'restaurant') {
      this.setState({
        placeIcon: chef
      });
    } else if (place.type === 'hotel') {
      this.setState({
        placeIcon: hotel
      });
    } else {
      this.setState({
        placeIcon: gas
      });
    }
  };
 
  render() {
    const { place } = this.props; 
    const { placeIcon } = this.state;
    return (
      <Marker
        title={place.title}
        position={place.location}
        animation={window.google.maps.Animation.DROP}
        icon={placeIcon}
      />
    );
  }
}
 
export default PlaceInfo;