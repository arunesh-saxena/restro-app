import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Heading from '../../components/heading/Heading';
import OrderDetailTable from '../../components/orderDetailTable/OrderDetailTable';
import AppUrls from '../../appConstants/appUrls';

const OrderStatusContainer = (props) => {
    const { placedOrder, labels } = props;
    const orderDetails = details => <OrderDetailTable orderDetail={details} />;

    const renderOrderDetails = () => {
        const isOrderAvialable = !!Object.keys(placedOrder).length;
        console.log(isOrderAvialable);
        if (isOrderAvialable) {
            return orderDetails(placedOrder);
        }
        return (
            <div className="order-empty-msg-section">
                <p>{labels.common.emptyOrder}</p>
                <Link to={AppUrls.MENU_LIST} className="btn btn-primary">
                    {labels.common.menuList}
                </Link>
            </div>
        );
    };
    return (
        <div className="order-status-container">
            <Heading text="Your Order Status" />
            {renderOrderDetails()}
        </div>
    );
};

OrderStatusContainer.protoType = {
    placedOrder: PropTypes.object
};

export default OrderStatusContainer;
