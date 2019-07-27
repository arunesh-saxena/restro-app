import React from 'react';
import PropTypes from 'prop-types';

const OrderStatusTile = (props) => {
    const { tokenId, orderStatus, tableId } = props;
    return (
        <div className="order-status-tile">
            <span>Token # {tokenId}</span>
            <span>Status # {orderStatus}</span>
            <span>Table # {tableId}</span>
        </div>
    );
};

OrderStatusTile.propTypes = {
    tokenId: PropTypes.number,
    orderStatus: PropTypes.string,
    tableId: PropTypes.number
};
export default OrderStatusTile;
