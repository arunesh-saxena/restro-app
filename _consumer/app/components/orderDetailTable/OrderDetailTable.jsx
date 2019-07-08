import React from 'react';
import PropTypes from 'prop-types';

const OrderDetailTable = (props) => {
    const { id, tokenId, totalCost, orderStatus, tableId, items, updatedAt } =
        props.orderDetail || {};
    return (
        <div className="row justify-content-md-center">
            <div className="col-6">
                <div className="order-detail-table">
                    <div className="table-row">
                        <div>Order Id</div>
                        <div>{id}</div>
                    </div>
                    <div className="table-row">
                        <div>Token Id</div>
                        <div>{tokenId}</div>
                    </div>
                    <div className="table-row">
                        <div>Table Id</div>
                        <div>{tableId}</div>
                    </div>
                    <div className="table-row">
                        <div>Order Status</div>
                        <div>{orderStatus}</div>
                    </div>
                    <div className="table-row">
                        <div>Total Cost</div>
                        <div>{totalCost}</div>
                    </div>
                    <div className="table-row">
                        <div>Last updatedAt</div>
                        <div>{updatedAt}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

OrderDetailTable.prototype = {
    orderDetail: PropTypes.object
};

export default OrderDetailTable;
