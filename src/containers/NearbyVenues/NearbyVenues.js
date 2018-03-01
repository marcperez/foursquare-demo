import React from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';
import { findVenues } from '../../services/Foursquare';

class NearbyVenues extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      venues: [],
      position: {
        coords: {}
      },
      filters: {
        query: '',
        radius: 250
      },
      locationLoading: true,
      locationError: false
    };

    this.loadNearbyVenues = debounce(this.loadNearbyVenues, 500);
    this.updateFilters = this.updateFilters.bind(this);
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState(
          { position, locationLoading: false, locationError: false },
          () => this.loadNearbyVenues()
        );
      },
      error => this.setState({ locationLoading: false, locationError: true })
    );
  }

  loadNearbyVenues() {
    const { position, filters } = this.state;

    findVenues({
      ll: `${position.coords.latitude},${position.coords.longitude}`,
      radius: filters.radius,
      query: filters.query
    }).then(venues => this.setState({ venues }));
  }

  updateFilters(filters) {
    this.setState(
      {
        filters
      },
      () => this.loadNearbyVenues()
    );
  }

  render() {
    if (this.state.locationLoading) {
      return <p>Loading...</p>;
    } else if (this.state.locationError) {
      return <p>We couldn't detect your location. Please, try again later.</p>;
    }

    return this.props.render({
      ...this.state,
      updateFilters: this.updateFilters
    });
  }
}

NearbyVenues.propTypes = {
  render: PropTypes.func
};

export default NearbyVenues;
