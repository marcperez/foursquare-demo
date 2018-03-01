import React, { Component } from 'react';
import VenueList from './../Venues/VenueList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app_wrapper">
        <header>
          <h1 className="app_title">Best Nearby</h1>
        </header>
        <VenueList venues={[{id: 123, name: "Test"}]} />
      </div>
    );
  }
}

export default App;
