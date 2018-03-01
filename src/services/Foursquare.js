import queryString from 'query-string';

const apiConfig = {
  client_id: 'QN4ZGLW5V4BDVUYOR2V0O2FDAGG2LAB005TYRVTOHMLFXDAF',
  client_secret: '4A0V5CMPN1WKZZMP11VO4TNC4NXRCZW2TQ0JLJDWAZMJU2EK',
  v: '20180225'
};

export const findVenues = ({ ll }) => {
  const params = queryString.stringify({ ...apiConfig, ll });

  return fetch(`https://api.foursquare.com/v2/venues/explore?${params}`)
    .then(response => response.json())
    .then(json => json.response.groups)
    .then(groups => groups.reduce((items, group) => items.concat(group.items), []))
    .then(items => items.map(item => item.venue));
};
