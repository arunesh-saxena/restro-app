import React from 'react';
import { Link } from 'react-router-dom';
import commonUtil from '../../utils/commonUtils';
import AppUrls from '../../appConstants/appUrls';
import NumberSelector from '../NumberSelector/NumberSelector';

const MenuItem = (props) => {

    const quantityHandler = (selectedNumber) => {
        const itemData = {
            itemId: props.item.id,
            quantity: selectedNumber
        };
        props.quantityHandler(itemData)
    };
    return (
        <div className='menu-item'>
            <div className='heading'>
                <div className="img-container">
                    {
                        props.item.imageURL ?
                            <picture>
                                <source media="(min-width: 992px)" srcSet={`http://localhost:3000/${props.item.imageURL}`} />
                                <source media="(max-width: 991px)" srcSet={`http://localhost:3000/${props.item.imageURL}`} />
                                <img src={`http://localhost:3000/${props.item.imageURL}`} alt={props.item.itemName} title={props.item.itemName} />
                            </picture>
                            : 'no image'
                    }

                </div>
                <p>{props.labels.description}: {props.item.description}</p>
            </div>

            <div className="item-info">
                <div className='info-row'>
                    <label className='row-header'>{props.labels.itemName}</label>
                    <div className='row-value'>
                        {props.item.itemName}
                        <span className='code'>{props.item.itemCode}</span>
                        <span><Link to={`${AppUrls.EDIT_MENU}/${props.item.id}`}>Edit</Link></span>
                    </div>
                </div>

                <div className='info-row'>
                    <label className='row-header'>{props.labels.quantity}</label>
                    <div className='row-value quantity-selector-container'>
                        <NumberSelector
                            number={props.item.quantity}
                            changeNumberHandler={quantityHandler} />
                    </div>
                </div>

                <div className='info-row'>
                    <label className='row-header'>{props.labels.rate}</label>
                    <div className='row-value'>{props.item.price} {props.item.unit}</div>
                </div>

                <div className='info-row'>
                    <label className='row-header'>{props.labels.lastUpdate}</label>
                    <div className='row-value'>{commonUtil.getDate(props.item.updatedAt)}</div>
                </div>
            </div>

        </div>
    );
}


export default MenuItem;