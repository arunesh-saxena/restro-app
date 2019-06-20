import React from 'react';
import Heading from '../../components/heading/Heading';
import CartProductList from './CartProductList';

const CartContainer = (props) => {
    const { labels } = props;
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

    return (
        <div className="cart-container">
            <div className="row justify-content-md-center">
                <div className="col-12 col-md-12">
                    {renderHeading()}
                    <CartProductList
                        labels={labels}
                        menuList={props.menuList}
                    />
                    Todo: Car Summary comming soon
                    {renderPlaceOrderBtn()}
                </div>
            </div>
        </div>
    );
};
export default CartContainer;
