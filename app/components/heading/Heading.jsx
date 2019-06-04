import React from 'react';
import PropTypes from 'prop-types';

const Heading = props => {
  return (
    <span className="heading">
      <h1>{props.text}</h1>
    </span>
  );
};

Heading.propTypes = {
  text: PropTypes.string,
};

export default Heading;
