import React from 'react';
import PropTypes from 'prop-types';

const Heading = (props) => {
    const { text, tag } = props;
    const Tag = tag ? tag : 'h1';
    return (
        <span className="heading">
            <Tag>{text}</Tag>
        </span>
    );
};

Heading.propTypes = {
    text: PropTypes.string.isRequired,
    tag: PropTypes.string
};

export default Heading;
