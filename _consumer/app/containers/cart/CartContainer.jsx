import React from 'react';
import { Link } from 'react-router-dom';
import Heading from '../../components/heading/Heading';
import CartProductList from './CartProductList';
import CartSummary from './CartSummary';
import AppUrls from '../../appConstants/appUrls';

const CartContainer = (props) => {
    const { labels, cart } = props;
    const cartOrder = (cart && cart.order) || [];
    const renderHeading = () => (
        <div className="cart-heading">
            <Heading text={labels.common.yourCart} />
        </div>
    );

    const renderPlaceOrderBtn = () => (
        <div className="row">
            <div className="col-md-2 offset-md-10">
                <button
                    type="button"
                    id="place_order"
                    className="place-order-btn btn btn-primary btn-lg"
                    onClick={() => {
                        props.placeOrderClickHandler();
                    }}
                >
                    {labels.common.placeOrder}
                </button>
            </div>
        </div>
    );

    const renderEmptyMsg = () => {
        if (!cartOrder.length) {
            return (
                <div className="cart-empty-msg-section">
                    <p>{labels.common.emptyCart}</p>
                    <Link to={AppUrls.MENU_LIST} className="btn btn-primary">
                        {labels.common.menuList}
                    </Link>
                </div>
            );
        }
        return '';
    };

    const renderCartContainer = () => {
        if (cartOrder.length) {
            return (
                <React.Fragment>
                    <CartProductList
                        labels={labels}
                        menuList={props.menuList}
                        cartList={props.cart}
                    />
                    <CartSummary
                        labels={labels}
                        menuList={props.menuList}
                        cartList={props.cart}
                    />
                    {renderPlaceOrderBtn()}
                </React.Fragment>
            );
        }
        return '';
    };

    return (
        <div className="cart-container">
            <div className="row justify-content-md-center">
                <div className="col-12 col-md-12">
                    {renderHeading()}
                    {renderEmptyMsg()}
                    {renderCartContainer()}
                </div>
            </div>
        </div>
    );
};
export default CartContainer;
