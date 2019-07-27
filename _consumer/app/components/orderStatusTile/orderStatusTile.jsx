import React from 'react';
import PropTypes from 'prop-types';

const OrderStatusTile = (props) => {
    const { tokenId, orderStatus, tableId, labels } = props;
    return (
        <div className="order-status-tile">
            <span>
                {labels['token#']} {tokenId}
            </span>
            <span>
                {labels['status#']} {orderStatus}
            </span>
            <span>
                {labels['table#']} {tableId}
            </span>
        </div>
    );
};

OrderStatusTile.propTypes = {
    tokenId: PropTypes.number,
    orderStatus: PropTypes.string,
    tableId: PropTypes.number,
    labels: PropTypes.object
};
export default OrderStatusTile;
