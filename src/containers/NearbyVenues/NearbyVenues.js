import React from "react";
import PropTypes from "prop-types";
import debounce from "lodash/debounce";
import { findVenues } from "../../services/Foursquare";

class NearbyVenues extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      venues: [],
      position: {
        coords: {}
      },
      locationLoading: true,
      locationError: false
    };

    this.loadNearbyVenues = debounce(this.loadNearbyVenues, 500);
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
    const { position } = this.state;

    findVenues({
      ll: `${position.coords.latitude},${position.coords.longitude}`,
    }).then(venues => this.setState({ venues }));
  }

  render() {
    if (this.state.locationLoading) {
      return <p>Loading...</p>;
    } else if (this.state.locationError) {
      return <p>We couldn't detect your location. Please, try again later.</p>;
    }

    return this.props.render(this.state);
  }
}

export default NearbyVenues;
