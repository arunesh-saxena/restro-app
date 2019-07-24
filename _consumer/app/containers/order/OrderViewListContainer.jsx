import React from 'react';
import PropTypes from 'prop-types';

import Heading from '../../components/heading/Heading';
import AppUrls from '../../appConstants/appUrls';

const OrderViewListContainer = (props) => {
    const { placedOrder, labels } = props;

    return (
        <div className="order-view-list-container">
            <Heading text="Orders Status" />
        </div>
    );
};

OrderViewListContainer.protoType = {
    placedOrder: PropTypes.object
};

export default OrderViewListContainer;
