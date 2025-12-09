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
        labels,
        restaurants = [],
        changeRestroHandler,
        defaultValue,
        orders = [],
        getActionStatus
    } = props;

    const renderOrders = () => {
        const orderElms = orders.map((order, index) => {
            const status = getActionStatus(order.orderStatus);
            return (
                <OrderStatusTile
                    key={index}
                    tokenId={order.tokenId}
                    orderStatus={status}
                    tableId={order.tableId}
                    labels={labels}
                />
            );
        });

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
                    message={labels.pleaseSelectTheRestaurant}
                    infoClass="alert-warning"
                />
            )}

            <div className="order-list-Container">{renderOrders()}</div>
        </div>
    );
};

OrderViewListContainer.protoType = {
    restroCode: PropTypes.string,
    restaurants: PropTypes.array,
    changeRestroHandler: PropTypes.func,
    defaultValue: PropTypes.string,
    orders: PropTypes.array,
    labels: PropTypes.object
};

export default OrderViewListContainer;
