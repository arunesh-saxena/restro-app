import React, { Component } from 'react';
import PropTypes from 'prop-types';

const InfoMessage = (props) => {
    const { message = null, heading = null, infoClass = '' } = props;
    const renderMsg = () => {
        if (!message) {
            return '';
        }

        const class_name = `alert ${infoClass} ${infoClass}`;
        return (
            <div className={class_name}>
                {heading && (
                    <strong className="alert-heading"> {heading} : </strong>
                )}
                {message}
            </div>
        );
    };

    return <React.Fragment>{renderMsg()}</React.Fragment>;
};

InfoMessage.propTypes = {
    heading: PropTypes.string,
    message: PropTypes.string,
    infoClass: PropTypes.string
};

export default InfoMessage;
