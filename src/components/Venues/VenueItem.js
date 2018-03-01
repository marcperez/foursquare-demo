import React from 'react';
import PropTypes from 'prop-types';

const VenueItem = ({ venue }) => {
  const getPrimaryCategoryName = categories => {
    const category = categories.find(category => category.primary);

    return category ? category.name : '';
  };

  return (
    <li className="venue">
      <h3 className="venue__title">{venue.name}</h3>
      <div className="venue__rating">{venue.rating}</div>
      <div className="venue__meta">
        <div className="venue__category">{getPrimaryCategoryName(venue.categories)}</div>
        <div className="venue__address">
          {venue.location.city ? `${venue.location.city}, ` : ''}
          {`${venue.location.country}`}
        </div>
        <a
          href={`https://www.google.com/maps/dir/?api=1&destination=${venue.location.lat},${
            venue.location.lng
          }`}
          target="_blank"
          className="venue__directions"
        >
          Get Directions
        </a>
      </div>
    </li>
  );
};

VenueItem.propTypes = {
  venue: PropTypes.object
};

export default VenueItem;
