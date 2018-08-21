import React, { Component } from 'react';
import './App.css';
import SimpleMap from './simplemap'

class MapsApp extends React.Component {
    
  render() {
    return (
      <div className="app">
        <SimpleMap/>
      </div>
    )
  }

}

export default MapsApp

