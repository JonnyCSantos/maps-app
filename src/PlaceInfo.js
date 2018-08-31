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
    const { place, selectPlace, closeInfoWindow, isOpen, placeTitle} = this.props; 
    const { placeIcon } = this.state;
    return (
      <Marker
        title={place.title}
        position={place.location}
        animation={window.google.maps.Animation.DROP}
        icon={placeIcon}
        onClick={() => selectPlace(place.title)}
      >
        {
          (place.title === placeTitle && isOpen) &&
          <InfoWindow key={placeTitle} onCloseClick={() => closeInfoWindow()}>
            <p>{place.title}</p>
          </InfoWindow>
        }
      </Marker>
    );
  }
}
 
export default PlaceInfo;
