import React from 'react';
import PropTypes from 'prop-types';

import Heading from '../../components/heading/Heading';
import ServerErrors from '../../components/serverErrors/ServerErrors';
import OrderItem from '../../components/orderItem/OrderItem';

const OrderListContainer = (props) => {
    const { labels, order = {} } = props;
    const renderHeading = () => <Heading text={labels.orderList} />;
    const renderOrderList = () => {
        const { orders = [] } = order;
        const orderList = orders.map((item, ind) => (
            <li key={ind} className="list-group-item">
                <OrderItem
                    labels={labels}
                    itemDetails={item}
                    actionHandeler={(actionId) => {
                        console.log('todo: action change', actionId);
                    }}
                />
            </li>
        ));
        return <ul className="list-group">{orderList}</ul>;
    };
    const orderDummy = order.orders;

    return (
        <div className="order-list-container">
            {renderHeading()}
            <ServerErrors />
            {renderOrderList()}
        </div>
    );
};
OrderListContainer.propTypes = {
    labels: PropTypes.shape({ orders: PropTypes.array })
};
export default OrderListContainer;
