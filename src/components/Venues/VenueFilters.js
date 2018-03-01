import React from 'react';
import PropTypes from 'prop-types';

class VenueFilters extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      radius: 250
    };

    this.handleRadiusChange = this.handleRadiusChange.bind(this);
    this.handleCategoryToggle = this.handleCategoryToggle.bind(this);
  }

  handleRadiusChange(event) {
    this.setState(
      {
        radius: event.target.value
      },
      () => {
        this.props.onChange(this.state);
      }
    );
  }

  handleCategoryToggle(event) {
    const newValue = event.target.value;

    this.setState(
      prevState => {
        return {
          query: prevState.query === newValue ? '' : newValue
        };
      },
      () => {
        this.props.onChange(this.state);
      }
    );
  }

  render() {
    const getVenueFilterButtonClasses = btnValue => {
      return (
        'venue_filters__button ' +
        (this.state.query === btnValue ? 'active' : '')
      );
    };

    return (
      <div className="venue_filters">
        <div className="venue_filters__categories">
          <button
            value=""
            onClick={this.handleCategoryToggle}
            className={getVenueFilterButtonClasses('')}
          >
            All
          </button>
          <button
            value="food"
            onClick={this.handleCategoryToggle}
            className={getVenueFilterButtonClasses('food')}
          >
            Food
          </button>
          <button
            value="coffee"
            onClick={this.handleCategoryToggle}
            className={getVenueFilterButtonClasses('coffee')}
          >
            Coffee
          </button>
          <button
            value="nightlife"
            onClick={this.handleCategoryToggle}
            className={getVenueFilterButtonClasses('nightlife')}
          >
            Nightlife
          </button>
        </div>
        <div className="venue_filters__distance">
          <div className="venue_filters__distance_label">Distance</div>
          <div className="venue_filters__distance_current">
            {this.state.radius}m
          </div>
          <input
            type="range"
            min="100"
            max="1000"
            step="50"
            className="venue_filters__distance_slider"
            value={this.state.radius}
            onChange={this.handleRadiusChange}
          />
        </div>
      </div>
    );
  }
}

VenueFilters.propTypes = {
  onChange: PropTypes.func
};

export default VenueFilters;
