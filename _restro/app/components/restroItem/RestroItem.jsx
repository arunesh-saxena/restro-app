import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import AppUrls from '../../appConstants/appUrls';

const RestroItem = (props) => {
    const { restroDetails, labels } = props;
    return (
        <div className="restro-item">
            <div>{restroDetails.restaurantCode}</div>
            <div>{restroDetails.restaurantName}</div>
            <div>{restroDetails.noOfTables}</div>
            <div>
                <Link to={`${AppUrls.EDIT_RESTRO}/${restroDetails.id}`}>
                    {labels.editRestro}
                </Link>
            </div>
        </div>
    );
};

RestroItem.propTypes = {
    labels: PropTypes.shape({}),
    restroDetails: PropTypes.shape({
        restaurantCode: PropTypes.string,
        restaurantName: PropTypes.string,
        noOfTables: PropTypes.number,
        id: PropTypes.number
    })
};

export default RestroItem;
