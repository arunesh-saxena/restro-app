import React from 'react';
import PropTypes from 'prop-types';

const OrderItem = (props) => {
    const { id, tokenId, totalCost, status, isDeleted, tableId, items = [] } =
        props.itemDetails || {};
    const { actionHandeler } = props;
    const selectInput = React.createRef();
    const changeHandler = () => {
        const actionId = selectInput.current.value;
        actionHandeler(actionId);
    };
    return (
        <div className="order-item">
            <div className="item-col">
                <div className="id-section">
                    <div className="id-row">
                        <strong>Token#</strong>
                        <span>{tokenId}</span>
                    </div>
                    <div className="id-row">
                        <strong>Order#</strong>
                        <span>{id}</span>
                    </div>
                    <div className="id-row">
                        <strong>Table#</strong>
                        <span>{tableId}</span>
                    </div>
                    <div className="id-row">
                        <strong>Status</strong>
                        <span>{status}</span>
                    </div>
                </div>
            </div>
            <div className="item-col">
                <div className="item-section">
                    <div className="item-section-header">
                        <strong>itemName</strong>
                        <strong>itemCode</strong>
                        <strong>quantity</strong>
                    </div>
                    {items.map((item, ind) => (
                        <div className="item-section-row" key={ind}>
                            <span>{item.itemName}</span>
                            <span>{item.itemCode}</span>
                            <span>{item.quantity}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="item-col">
                <div className="action-col">
                    <strong>Action</strong>
                    <select
                        ref={selectInput}
                        className="action-selector"
                        onChange={() => {
                            changeHandler();
                        }}
                    >
                        <option value="1">Action# 1</option>
                        <option value="2">Action# 2</option>
                        <option value="3">Action# 3</option>
                        <option value="4">Action# 4</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

OrderItem.propTypes = {
    itemDetails: PropTypes.shape({
        id: PropTypes.number,
        tokenId: PropTypes.number,
        totalCost: PropTypes.number,
        status: PropTypes.string,
        isDeleted: PropTypes.bool,
        tableId: PropTypes.number,
        items: PropTypes.arrayOf(
            PropTypes.shape({
                itemCode: PropTypes.string,
                itemCost: PropTypes.number,
                id: PropTypes.number,
                itemName: PropTypes.string,
                quantity: PropTypes.number,
                price: PropTypes.number,
                unit: PropTypes.string
            })
        )
    }),
    actionHandeler: PropTypes.func
};

export default OrderItem;
