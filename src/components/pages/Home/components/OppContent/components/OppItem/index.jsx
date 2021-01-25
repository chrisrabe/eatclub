import React from 'react';
import PropTypes from 'prop-types';

const OppItem = ({ item }) => {
  console.log(item);
  return <div>Item</div>;
};

OppItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default OppItem;
