import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AppUrls from '../../appConstants/appUrls';
import AppContext from '../context/AppContext';

const CartLink = (props) => {
    const { headerLabel } = props;
    return (
        <div className="car-link">
            <AppContext.Consumer>
                {(context) => {
                    const order = context.order;
                    let cartItemNums = 0;
                    order.forEach((item) => {
                        cartItemNums += item.quantity;
                    });
                    return (
                        <Link to={AppUrls.CART} title={headerLabel}>
                            {headerLabel} {cartItemNums ? cartItemNums : ''}
                        </Link>
                    );
                }}
            </AppContext.Consumer>
        </div>
    );
};

CartLink.propTypes = {
    headerLabel: PropTypes.string
};
export default CartLink;
