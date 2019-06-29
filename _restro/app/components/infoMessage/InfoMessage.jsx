import React, { Component } from 'react';
import PropTypes from 'prop-types';

const InfoMessage = (props) => {
    const { infoType = null, message = null, heading = null } = props;
    const renderMsg = () => {
        if (!message) {
            return '';
        }
        let infoClass = '';
        if (infoType === 'success') {
            infoClass = 'alert-success';
        } else {
            infoClass = 'alert-primary';
        }
        const className = `alert ${infoClass}`;
        return (
            <div className={className}>
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
    infoType: PropTypes.string,
    heading: PropTypes.string,
    message: PropTypes.string
};

export default InfoMessage;
