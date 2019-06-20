import React from 'react';
import Image from '../../components/image/Image';

const CartProductList = (props) => {
    const { labels, menuList } = props;
    const cart = {
        order: [
            {
                itemId: 1,
                quantity: 1
            },
            {
                itemId: 2,
                quantity: 2
            },
            {
                itemId: 3,
                quantity: 2
            },
            {
                itemId: 4,
                quantity: 2
            },
            {
                itemId: 5,
                quantity: 2
            }
        ]
    };

    const getCartProductList = () => {
        const cartList = [];
        cart.order.forEach((value) => {
            const itemDetails = menuList.find(menu => menu.id === value.itemId);
            const cartItemDetails = {
                itemId: value.itemId,
                currency: itemDetails.currency,
                description: itemDetails.description,
                imageURL: itemDetails.imageURL,
                itemCode: itemDetails.itemCode,
                itemName: itemDetails.itemName,
                price: itemDetails.price,
                quantity: value.quantity,
                unit: itemDetails.unit
            };
            cartList.push(cartItemDetails);
        });
        return cartList;
    };

    const renderListHeader = () => (
        <div className="row cart-product-header">
            <div className="product-col-header col-md-6 product-col-name">
                {labels.common.product}
            </div>
            <div className="product-col-header col-md-2 product-col-rate">
                {labels.common.rate}
            </div>
            <div className="product-col-header col-md-2 product-colquantity-">
                {labels.common.quantity}
            </div>
            <div className="product-col-header col-md-1 offset-md-1  product-col-total">
                {labels.common.total}
            </div>
        </div>
    );

    const renderCartProductList = () => {
        const cartProductList = getCartProductList();
        const list = cartProductList.map((item, ind) => (
            <div key={ind} className="cart-product-row ">
                <div className="row product-row-content">
                    <div className="col-12 col-md-6 cart-data-col cart-col-name">
                        <div className="row">
                            <div className="col-6 col-md-6">
                                <Image
                                    imgURL={`http://localhost:3000/${item.imageURL}`}
                                    alt={item.itemName}
                                    title={item.itemName}
                                />
                            </div>
                            <div className="col-6 col-md-6">
                                {item.itemName}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 cart-data-col cart-col-rate">
                        {item.price} {item.unit}
                    </div>
                    <div className="col-md-2 cart-data-col cart-col-quantity">
                        {item.quantity}
                    </div>
                    <div className="col-md-1 offset-md-1 cart-data-col cart-col-total">
                        {item.quantity * item.price}
                    </div>
                </div>
            </div>
        ));
        return list;
    };

    return (
        <div className="cart-product-container">
            {renderListHeader()}
            <div className="row cart-product-list">
                <div className="col">{renderCartProductList()}</div>
            </div>
        </div>
    );
};

export default CartProductList;
