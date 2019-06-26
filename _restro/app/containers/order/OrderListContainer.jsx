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
        const orderList = orders.map(item => item.tokenId);
        return orderList;
    };
    const orderDummy = {
        id: 1,
        tokenId: 1,
        totalCost: 10,
        status: '2',
        isDeleted: false,
        _id: '5d0f4ed576773067e2250b31',
        tableId: 1,
        items: [
            {
                itemCode: 'Sam1',
                itemCost: 10,
                _id: '5d0f4ed576773067e2250b32',
                id: 1,
                itemName: 'Samosa',
                quantity: 1,
                price: 10,
                unit: 'per piece'
            },
            {
                itemCode: 'dum1',
                itemCost: 10,
                _id: '5d0f4ed576773067e2250b32',
                id: 1,
                itemName: 'dummy1',
                quantity: 11,
                price: 10,
                unit: 'per piece'
            },
            {
                itemCode: 'dum1',
                itemCost: 10,
                _id: '5d0f4ed576773067e2250b32',
                id: 1,
                itemName: 'dummy1',
                quantity: 11,
                price: 10,
                unit: 'per piece'
            },
            {
                itemCode: 'dum1',
                itemCost: 10,
                _id: '5d0f4ed576773067e2250b32',
                id: 1,
                itemName: 'dummy1',
                quantity: 11,
                price: 10,
                unit: 'per piece'
            },
            {
                itemCode: 'dum1',
                itemCost: 10,
                _id: '5d0f4ed576773067e2250b32',
                id: 1,
                itemName: 'dummy1',
                quantity: 11,
                price: 10,
                unit: 'per piece'
            }
        ],
        updatedAt: '2019-06-25T09:40:10.882Z',
        createdAt: '2019-06-23T10:05:09.229Z',
        __v: 0
    };

    return (
        <div className="order-list-container">
            {renderHeading()}
            <ServerErrors />
            {renderOrderList()}
            <OrderItem
                itemDetails={orderDummy}
                actionHandeler={(actionId) => {
                    console.log('todo: action change', actionId);
                }}
            />
        </div>
    );
};
OrderListContainer.propTypes = {
    labels: PropTypes.shape({ orders: PropTypes.array })
};
export default OrderListContainer;
