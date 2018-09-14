import React, { Component } from 'react';
import { Marker, InfoWindow } from 'react-google-maps';

import * as  FoursquareAPI from './FoursquareAPI';
 
class PlaceInfo extends Component {
  state = {
    placeIcon: '',
    placeDetails: {
      address: '',
      cep: '',
    },
    error: false,
    errorDet: ''
  };

  componentDidMount() {
    FoursquareAPI.getDetails(this.props.place.id)
    .then(res =>
      {console.log(res)      
      this.setState({
        placeDetails: {
          address: res.location.address,
          cep: res.location.postalCode
        }
      })
    }
    ).catch(err => {
      this.setState({ 
          error: true,
          errorDet: `${err}`
       })
    });
  }

  callSelectPlace = (placeTitle) => {
    const {selectPlace} = this.props
    selectPlace(placeTitle)
  }
 
  render() {
    const { place, closeInfoWindow, isOpen, placeTitle} = this.props; 
    
    console.log(`place.title = ${place.title}`)
    console.log(`placeTitle = ${placeTitle}`)
    return (
      <Marker
        title={place.title}
        position={place.location}
        animation={window.google.maps.Animation.DROP}
        icon={
          place.title === placeTitle && isOpen
          ? { url: place.iconOpen }
          : { url: place.iconClosed }
        }
        onClick={() => {
          this.callSelectPlace(place.title)
          }
        }
      >
        {
          (place.title === placeTitle && isOpen) &&
          <InfoWindow key={placeTitle} onCloseClick={() => closeInfoWindow()}>
            { this.state.error 
              ? <div>
                  <p className="error">Desculpe, não foi possível carregar detalhes do lugar.<br/>{this.state.errorDet}</p>
                </div>
              : <div>
                  <p className="title">{place.title}</p>
                  <div className="border-det">
                    <p className="address">Endereço: <br/>{this.state.placeDetails.address}</p>
                    <p className="cep">CEP: <br/>{this.state.placeDetails.cep}</p>
                  </div>
                  <p className="credits"><span>Detalhes de</span> FoursquareAPI</p>
                </div>
            }
          </InfoWindow>
        }
      </Marker>
    );
  }
}

export default PlaceInfo;
