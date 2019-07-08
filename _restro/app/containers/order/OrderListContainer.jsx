import React from 'react';
import PropTypes from 'prop-types';

import Heading from '../../components/heading/Heading';
import ServerMsg from '../../components/serverMsg/ServerMsg';
import OrderItem from '../../components/orderItem/OrderItem';
import RestroSelectList from '../../components/RestroSelectList/RestroSelectList';

const OrderListContainer = (props) => {
    const {
        labels,
        order = {},
        orderActionHandler,
        userRestaurants = [],
        actionList = [],
        restroCode
    } = props;
    const renderHeading = () => <Heading text={labels.orderList} />;

    const renderSelectedRestro = () => {
        const restaurant =
            userRestaurants.filter(
                v => v.restaurantCode.toLowerCase() === restroCode.toLowerCase()
            ) || [];
        const restaurantName = restaurant.length
            ? restaurant[0].restaurantName
            : labels.all;
        const msg = `${labels.ordersListForRestaurant} ${restaurantName}`;

        return <Heading text={msg} tag="h2" />;
    };
    const renderOrderList = () => {
        const { orders = [] } = order;
        const orderList = orders.map((item, ind) => {
            if (!item.isFilter) {
                return '';
            }
            return (
                <li key={ind} className="list-group-item">
                    <OrderItem
                        labels={labels}
                        itemDetails={item}
                        actionList={actionList}
                        actionHandeler={orderActionHandler}
                    />
                </li>
            );
        });
        return <ul className="list-group">{orderList}</ul>;
    };
    const restroChangeHandler = (text) => {
        props.restroChangeHandler(text);
    };

    return (
        <div className="order-list-container">
            {renderHeading()}
            <RestroSelectList
                restaurants={userRestaurants}
                label={labels.selectRestaurant}
                changeHandler={restroChangeHandler}
            />
            {renderSelectedRestro()}
            <ServerMsg />
            {renderOrderList()}
        </div>
    );
};
OrderListContainer.propTypes = {
    labels: PropTypes.shape({ orders: PropTypes.array }),
    orderActionHandler: PropTypes.func
};
export default OrderListContainer;
