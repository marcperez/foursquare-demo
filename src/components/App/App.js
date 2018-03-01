import React, { Component } from 'react';
import NearbyVenues from '../../containers/NearbyVenues/NearbyVenues';
import VenueList from '../Venues/VenueItem';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app_wrapper">
        <header>
          <h1 className="app_title">Best Nearby</h1>
        </header>
        <NearbyVenues render={({ venues }) => <VenueList venues={venues} />} />
      </div>
    );
  }
}

export default App;
