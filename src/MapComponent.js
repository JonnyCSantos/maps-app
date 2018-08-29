/* eslint-disable no-undef */
import React from 'react';
import { compose } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import PlaceInfo from './PlaceInfo';
 
// Esse componente foi refatorado só para usar o que é necessário
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
    {/* Aqui mapeamos sobre cada lugar que você passou como props para o component MapComponent, criando um PlaceInfo para cada, passando o lugar e uma chave identificadora (nome do lugar) */}
    {props.places.map(place => (
      <PlaceInfo key={place.title} place={place} />
    ))}
  </GoogleMap>
));
 
export default MapComponent;