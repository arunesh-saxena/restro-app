import React from 'react';
import PropTypes from 'prop-types';

import Heading from '../../components/heading/Heading';

const CartSummary = (props) => {
    const { labels, menuList, cartList } = props;
    const cartOrder = (cartList && cartList.order) || [];

    const totolAmount = cartOrder.reduce((total, cartItem) => {
        const menuItem = menuList.find(
            menuItem => menuItem.id === cartItem.itemId
        );
        return total + cartItem.quantity * menuItem.price;
    }, 0);

    return (
        <div className="cart-summary">
            <div className="row">
                <div className="col-12 col-md-6 offset-md-6">
                    <Heading text={labels.common.cartSummary} tag="h2" />
                    <div className="row">
                        <div className="col-8">
                            {labels.common.total} {labels.common.amount} :
                        </div>
                        <div className="col-1 offset-2"> {totolAmount}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

CartSummary.propTypes = {
    labels: PropTypes.object,
    menuList: PropTypes.array,
    cartList: PropTypes.object
};

export default CartSummary;
