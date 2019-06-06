import React from 'react';
import { Link } from 'react-router-dom';
import commonUtil from '../../utils/commonUtils';
import AppUrls from '../../appConstants/appUrls';
import NumberSelector from '../NumberSelector/NumberSelector';
import ToggleButton from '../toggleButton/ToggleButton';
import Image from '../image/Image';

const MenuItem = props => {
    const quantityHandler = selectedNumber => {
        const itemData = {
            itemId: props.item.id,
            quantity: selectedNumber,
        };
        props.quantityHandler(itemData);
    };
    const toggleHiddenMenuItemHandler = value => {
        const itemData = {
            itemId: props.item.id,
            isHidden: value,
        };
        props.toggleHandler(itemData);
    };
    return (
        <div className="menu-item">
            <div className="item-header">
                <div className="img-container">
                    {props.item.imageURL ? (
                        <Image
                            imgURL={`http://localhost:3000/${
                                props.item.imageURL
                            }`}
                            alt={props.item.itemName}
                            title={props.item.itemName}
                        />
                    ) : (
                        'no image'
                    )}
                </div>
                <p>
                    <strong>{props.labels.description}:</strong>{' '}
                    {props.item.description}
                </p>
            </div>

            <div className="item-info">
                <div className="info-row">
                    <div className="row-header">{props.labels.itemName}</div>
                    <div className="row-value">
                        {props.item.itemName}
                        <span className="code">{props.item.itemCode}</span>
                    </div>
                </div>

                <div className="info-row">
                    <div className="row-header">{props.labels.quantity}</div>
                    <div className="row-value quantity-selector-container">
                        <NumberSelector
                            number={props.item.quantity}
                            changeNumberHandler={quantityHandler}
                        />
                    </div>
                </div>

                <div className="info-row">
                    <div className="row-header">{props.labels.rate}</div>
                    <div className="row-value">
                        {props.item.price} {props.item.unit}
                    </div>
                </div>

                <div className="info-row">
                    <div className="row-header">{props.labels.hidden}</div>
                    <div className="row-value">
                        <ToggleButton
                            toggleHandler={toggleHiddenMenuItemHandler}
                            initialValue={props.item.isHidden}
                            checkedLabel={props.labels.yes}
                            unCheckedLabel={props.labels.no}
                        />
                    </div>
                </div>

                <div className="info-row">
                    <div className="row-header">{props.labels.lastUpdate}</div>
                    <div className="row-value">
                        {commonUtil.getDate(props.item.updatedAt)}
                    </div>
                </div>

                <div className="info-row">
                    <div className="row-header">{props.labels.action}</div>
                    <div className="row-value">
                        <span>
                            <Link to={`${AppUrls.EDIT_MENU}/${props.item.id}`}>
                                {props.labels.edit}
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
