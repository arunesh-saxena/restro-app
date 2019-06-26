import React from 'react';
import PropTypes from 'prop-types';

import Heading from '../../components/heading/Heading';
import ServerErrors from '../../components/serverErrors/ServerErrors';

const OrderListContainer = (props) => {
    const { labels, order = {} } = props;
    const renderHeading = () => <Heading text={labels.orderList} />;
    const renderOrderList = () => {
        const { orders = [] } = order;
        const orderList = orders.map(item => item.tokenId);
        return orderList;
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
