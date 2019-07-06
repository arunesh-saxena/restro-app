import React from 'react';
import Image from '../image/Image';

const MenuItem = (props) => {
    const addToCartHandler = (selectedNumber) => {
        const itemData = {
            itemId: props.item.id
        };
        props.addToCartHandler(itemData);
    };
    return (
        <div className="menu-item">
            <div className="item-header">
                <div className="img-container">
                    {props.item.imageURL ? (
                        <Image
                            imgURL={`http://localhost:3000/${props.item.imageURL}`}
                            alt={props.item.itemName}
                            title={props.item.itemName}
                        />
                    ) : (
                        'No image'
                    )}
                </div>
                <p>
                    <strong>{props.labels.description}:</strong>
                    {props.item.description}
                </p>
            </div>

            <div className="item-info">
                <div className="info-row">
                    <div className="row-header">{props.labels.itemName}</div>
                    <div className="row-value">{props.item.itemName}</div>
                </div>

                <div className="info-row">
                    <div className="row-header">{props.labels.rate}</div>
                    <div className="row-value">
                        {props.item.price} {props.item.unit}
                    </div>
                </div>
                <div className="info-row">
                    <div className="row-header">{props.labels.itemCode}</div>
                    <div className="row-value">
                        <span className="code">{props.item.itemCode}</span>
                    </div>
                </div>
                <div className="info-row">
                    <div className="row-header">{props.labels.action}</div>
                    <div className="row-value quantity-selector-container">
                        <button
                            type="button"
                            className="btn btn-primary btn-sm"
                            onClick={() => {
                                addToCartHandler();
                            }}
                        >
                            {props.labels.addToCart}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
