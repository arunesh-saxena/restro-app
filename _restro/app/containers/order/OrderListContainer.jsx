import React from 'react';
import PropTypes from 'prop-types';

import Heading from '../../components/heading/Heading';
import ServerErrors from '../../components/serverErrors/ServerErrors';
import OrderItem from '../../components/orderItem/OrderItem';

const OrderListContainer = (props) => {
    const actionDummy = [
        {
            actionId: 1,
            label: 'Action# 1'
        },
        {
            actionId: 2,
            label: 'Action# 2'
        },
        {
            actionId: 3,
            label: 'Action# 3'
        },
        {
            actionId: 4,
            label: 'Action# 4'
        },
        {
            actionId: 5,
            label: 'Action# 5'
        }
    ];
    const { labels, order = {} } = props;
    const renderHeading = () => <Heading text={labels.orderList} />;
    const renderOrderList = () => {
        const { orders = [] } = order;
        const orderList = orders.map((item, ind) => (
            <li key={ind} className="list-group-item">
                <OrderItem
                    labels={labels}
                    itemDetails={item}
                    actionList={actionDummy}
                    actionHandeler={(actionId) => {
                        console.log('todo: action change', actionId);
                    }}
                />
            </li>
        ));
        return <ul className="list-group">{orderList}</ul>;
    };

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
