import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import Heading from '../../components/heading/Heading';
import TableSelector from '../../components/tableSelector/TableSelector';
import CartProductList from './CartProductList';
import CartSummary from './CartSummary';
import AppUrls from '../../appConstants/appUrls';
import ServerErrors from '../../components/serverErrors/ServerErrors';

const CartContainer = (props) => {
    const {
        labels,
        cart,
        placeOrderClickHandler,
        tableChangeHandler,
        tableList
    } = props;
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
                        placeOrderClickHandler();
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
                    <section className="page-header-section ">
                        {renderHeading()}
                        <TableSelector
                            tableList={tableList}
                            tableChangeHandler={tableChangeHandler}
                        />
                    </section>
                    <ServerErrors />
                    {renderEmptyMsg()}
                    {renderCartContainer()}
                </div>
            </div>
        </div>
    );
};

CartContainer.propTypes = {
    labels: PropTypes.objectOf(
        PropTypes.shape({
            common: PropTypes.object
        })
    ),
    menuList: PropTypes.array,
    cart: PropTypes.object,
    tableList: PropTypes.arrayOf(
        PropTypes.shape({
            tableId: PropTypes.number.isRequired,
            label: PropTypes.string.isRequired
        })
    ),
    placeOrderClickHandler: PropTypes.func,
    tableChangeHandler: PropTypes.func
};

export default CartContainer;
