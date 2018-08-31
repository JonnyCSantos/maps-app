/* eslint-disable no-undef */
import React from 'react';
import { compose } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import PlaceInfo from './PlaceInfo';

const MapComponent = compose(
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    defaultZoom={16}
    center={{
      lat: -22.187610,
      lng:  -49.963843
    }}
  >
    {props.places.map(place => (
      <PlaceInfo 
        key={place.title} 
        place={place} 
        selectPlace={props.selectPlace}
        placeTitle={props.placeTitle}
        isOpen={props.isOpen}
        closeInfoWindow={props.closeInfoWindow}
        />
    ))}
  </GoogleMap>
)
);
 
export default MapComponent;
