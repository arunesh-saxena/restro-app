import React from 'react';
import PropTypes from 'prop-types';

import Heading from '../../components/heading/Heading';

const AddRestroContainer = (props) => {
    const { labels } = props;
    const renderHeading = () => <Heading text={labels.addRestro} />;

    return <div className="restro-add-container">{renderHeading()}</div>;
};

AddRestroContainer.propTypes = {
    labels: PropTypes.shape({})
};

export default AddRestroContainer;
