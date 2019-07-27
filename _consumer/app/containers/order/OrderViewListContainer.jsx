import React from 'react';
import PropTypes from 'prop-types';

import RestroSelectList from '../../components/RestroSelectList/RestroSelectList';
import ServerMsg from '../../components/serverMsg/ServerMsg';
import InfoMessage from '../../components/infoMessage/InfoMessage';
import Heading from '../../components/heading/Heading';
import OrderStatusTile from '../../components/orderStatusTile/OrderStatusTile';
import AppUrls from '../../appConstants/appUrls';

const OrderViewListContainer = (props) => {
    const {
        restroCode,
        restroSelectError,
        labels,
        restaurants = [],
        changeRestroHandler,
        defaultValue,
        orders = []
    } = props;

    const renderOrders = () => {
        const orderElms = orders.map((order, index) => (
            <OrderStatusTile
                key={index}
                tokenId={order.tokenId}
                orderStatus={order.orderStatus}
                tableId={order.tableId}
            />
        ));

        return orderElms;
    };

    return (
        <div className="order-view-list-container">
            <div className="page-heading">
                <Heading text="Orders Status" />
            </div>
            <ServerMsg />
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
            <div className="order-list-Container">{renderOrders()}</div>
        </div>
    );
};

OrderViewListContainer.protoType = {
    restroCode: PropTypes.string,
    restroSelectError: PropTypes.string,
    restaurants: PropTypes.array,
    changeRestroHandler: PropTypes.func,
    defaultValue: PropTypes.string,
    orders: PropTypes.array
};

export default OrderViewListContainer;
