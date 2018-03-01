import React, { Component } from 'react';
import NearbyVenues from '../../containers/NearbyVenues/NearbyVenues';
import VenueFilters from '../Venues/VenueFilters';
import VenueList from '../Venues/VenueList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app_wrapper">
        <header>
          <h1 className="app_title">Best Nearby</h1>
        </header>
        <NearbyVenues
          render={({ venues, filters, updateFilters }) => (
            <div>
              <VenueFilters filters={filters} onChange={updateFilters} />
              <VenueList venues={venues} />
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;
