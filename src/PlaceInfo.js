import React, { Component } from 'react';
import { Marker, InfoWindow } from 'react-google-maps';
import chef from './img/chef-icon.png';
import hotel from './img/hotel-icon.png';
import gas from './img/gas-station.png';
import * as  FoursquareAPI from './FoursquareAPI';
 
class PlaceInfo extends Component {
  state = {
    placeIcon: '',
    placeDetails: {
      address: '',
      cep: ''
    }
  };
 
  componentDidMount() {
    this.mountIcons();

    FoursquareAPI.getDetails(this.props.place.id).then(res =>
      {console.log(res)      
      this.setState({
        placeDetails: {
          address: res.location.address,
          cep: res.location.postalCode
        }
      })
    }
    );
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
            <div>
              <p className="title">{place.title}</p>
              <div className="border-det">
                <p className="address">Endereço: <br/>{this.state.placeDetails.address}</p>
                <p className="cep">CEP: <br/>{this.state.placeDetails.cep}</p>
              </div>
              <p className="credits"><span>Detalhes de</span> FoursquareAPI</p>
            </div>
          </InfoWindow>
        }
      </Marker>
    );
  }
}
 
export default PlaceInfo;
