import React from 'react';
import PropTypes from 'prop-types';

import RestroSelectList from '../../components/RestroSelectList/RestroSelectList';
import InfoMessage from '../../components/infoMessage/InfoMessage';
import Heading from '../../components/heading/Heading';
import AppUrls from '../../appConstants/appUrls';

const OrderViewListContainer = (props) => {
    const {
        restroCode,
        restroSelectError,
        labels,
        restaurants = [],
        changeRestroHandler,
        defaultValue
    } = props;

    return (
        <div className="order-view-list-container">
            <div className="page-heading">
                <Heading text="Orders Status" />
            </div>

            <RestroSelectList
                restaurants={restaurants}
                changeHandler={changeRestroHandler}
                defaultValue={defaultValue}
            />
            {!restroCode && (
                <InfoMessage
                    message={restroSelectError}
                    infoClass="alert-warning"
                />
            )}
        </div>
    );
};

OrderViewListContainer.protoType = {
    restroCode: PropTypes.string,
    restroSelectError: PropTypes.string,
    restaurants: PropTypes.array,
    changeRestroHandler: PropTypes.func,
    defaultValue: PropTypes.string
};

export default OrderViewListContainer;
