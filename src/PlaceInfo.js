import React, { Component } from 'react';
import chef from './img/chef-icon.png'
import { Marker, InfoWindow } from "react-google-maps"

class PlaceInfo extends Component {
    state = {
      place: this.props.place,
      placeIcon: ''
    }

    componentDidMount() {
      this.mountIcons();
    }

    mountIcons = () => {
      if(this.state.place.type === "restaurant"){
        this.setState({
          placeIcon: chef
        })
        return this.state.placeIcon       
      } else if (this.state.place.type === "hotel") {
        // icon = hotel
        return this.state.placeIcon       
      } else {
        // icon = gas
        return this.state.placeIcon       
      }
    }

    render(){
      return (
        <Marker
          title={this.state.place.title}
          position={this.state.place.location}
          animation={window.google.maps.Animation.DROP}
          icon={this.mountIcons}
        >   
        </Marker>   
      )    
  }
}

export default PlaceInfo