import React from "react";
import PropTypes from "prop-types";

const VenueItem = ({ venue }) => {
  return (
    <li className="venue">
        Venue
    </li>
  );
};

VenueItem.propTypes = {
    venue: PropTypes.object
};

export default VenueItem;
