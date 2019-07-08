import React from 'react';
import PropTypes from 'prop-types';

const OrderItem = (props) => {
    const { itemDetails = {}, actionHandeler, labels, actionList = [] } = props;
    const {
        id,
        tokenId,
        totalCost,
        orderStatus,
        isDeleted,
        tableId,
        items = [],
        restaurantCode
    } = itemDetails;

    const selectInput = React.createRef();
    const changeHandler = () => {
        const actionId = selectInput.current.value;
        actionHandeler(tokenId, actionId);
    };
    return (
        <div className="order-item">
            <div className="item-col">
                <div className="id-section">
                    <div className="id-row">
                        <strong>{labels.restroCode}</strong>
                        <span>{restaurantCode}</span>
                    </div>
                    <div className="id-row">
                        <strong>{labels.tokenNumber}</strong>
                        <span>{tokenId}</span>
                    </div>
                    <div className="id-row">
                        <strong>{labels.orderId}</strong>
                        <span>{id}</span>
                    </div>
                    <div className="id-row">
                        <strong>{labels.tableNumber}</strong>
                        <span>{tableId}</span>
                    </div>
                    <div className="id-row">
                        <strong>{labels.status}</strong>
                        <span>{orderStatus}</span>
                    </div>
                </div>
            </div>

            <div className="item-col">
                <div className="item-section">
                    <div className="item-section-header">
                        <strong>{labels.itemName}</strong>
                        <strong>{labels.itemCode}</strong>
                        <strong>{labels.quantity}</strong>
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
                    <strong>{labels.action}</strong>
                    <select
                        ref={selectInput}
                        className="action-selector"
                        defaultValue={parseInt(orderStatus)}
                        onChange={changeHandler}
                    >
                        {actionList.map((action, ind) => (
                            <option key={ind} value={parseInt(action.actionId)}>
                                {action.label}
                            </option>
                        ))}
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
        orderStatus: PropTypes.string,
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
    actionHandeler: PropTypes.func,
    labels: PropTypes.object,
    actionList: PropTypes.arrayOf(
        PropTypes.shape({
            actionId: PropTypes.number,
            label: PropTypes.string
        })
    )
};

export default OrderItem;
