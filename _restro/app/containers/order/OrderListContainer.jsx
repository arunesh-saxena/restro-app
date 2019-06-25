import React from 'react';
import PropTypes from 'prop-types';

import Heading from '../../components/heading/Heading';
import ServerErrors from '../../components/serverErrors/ServerErrors';

const OrderListContainer = (props) => {
    const { labels } = props;

    const renderHeading = () => <Heading text={labels.orderList} />;
    return (
        <div className="order-list-container">
            {renderHeading()}
            <ServerErrors />
        </div>
    );
};
OrderListContainer.propTypes = {
    labels: PropTypes.object
};
export default OrderListContainer;
