/* eslint-disable no-undef */
import React from "react"
import { compose, withProps, lifecycle } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap} from "react-google-maps"
import PlaceInfo from './PlaceInfo'

const MapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDuz98Ss0AjqLfiSvMAUJbTy29zm64jpm4&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ width: `80%`, float: `right`,height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  lifecycle({
    componentDidMount() {
      const refs = {}

      this.setState({
        bounds: null,
        mapMounted: ref => {
          refs.map = ref
        },
        center: {
          lat: -22.190681,
          lng: -49.963250
        },
        onBoundsChange: () => {
          this.setState ({
            bounds: ref.map.getBounds(),
            center: refs.map.getCenter()
          }) 
        },
        searchBoxMounted: ref => {
         refs.searchBox = ref 
        },
        onPlacesChanged: () => {
          const places = refs.searchBox.getPlaces()
          const bounds = new google.maps.LatLngBounds()
          
          const nextPlaces = places.map(place => {
            return {position: place.geometry.location}
          })

          this.setState({
            center: nextPlaces[0].position
          })
        }        
      })
    }
  }),
  withScriptjs,
  withGoogleMap
)
((props) =>  
  <GoogleMap
    defaultZoom={16}
    ref={props.mapMounted}
    center={props.center}
    onBoundsChange={props.onBoundsChange}
  >
  {props.places.map((place, i) => {
    <PlaceInfo 
      place={place}
      i={i}
      //outros atributos que vc precise mandar pra esse componente
    />
  })}
  </GoogleMap>
)

export default MapComponent