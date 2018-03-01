import React from "react";
import PropTypes from "prop-types";
import VenueItem from "./VenueItem";
import './Venues.css';

const VenueList = ({ venues }) => {
  if (venues.length > 0) {
    return (
      <div>
        <ul className="venue_list">
          {venues.map(venue => <VenueItem key={venue.id} venue={venue} />)}
        </ul>
      </div>
    );
  }

  return <p>Sorry! No results :(</p>;
};

VenueList.propTypes = {
  venues: PropTypes.array
};

VenueList.defaultProps = {
  venues: []
};

export default VenueList;
