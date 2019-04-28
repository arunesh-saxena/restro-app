import React from 'react';
import commonUtil from '../../utils/commonUtils'

const MenuItem = (props) => {
    return (
        <div className='menu-item'>
            <div className='heading'>
                <div className="img-container">

                    <picture>
                        <source media="(min-width: 992px)" srcset={`http://localhost:3000/${props.item.imageURL}`} />
                        <source media="(max-width: 991px)" srcset={`http://localhost:3000/${props.item.imageURL}`} />
                        <img src={`http://localhost:3000/${props.item.imageURL}`} alt={props.item.itemName} title={props.item.itemName} />
                    </picture>

                </div>
                <p>{props.labels.description}: {props.item.description}</p>
            </div>

            <div className="item-info">
                {props.item.itemName} <span className='code'>{props.item.itemCode}</span>
                <br />
                {props.labels.rate} {props.item.price} {props.item.unit}
                <br />
                <span>{props.labels.lastUpdate}: {commonUtil.getDate(props.item.updatedAt)}</span>
            </div>

        </div>
    );
}


export default MenuItem;