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
      lat: -22.190681,
      lng: -49.96325
    }}
  >
    {props.places.map(place => (
      <PlaceInfo key={place.title} place={place} />
    ))}
  </GoogleMap>
));
 
export default MapComponent;