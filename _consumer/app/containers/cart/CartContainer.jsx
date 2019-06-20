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

    return (
        <div className="cart-container">
            <div className="row justify-content-md-center">
                <div className="col-12 col-md-12">
                    {renderHeading()}
                    <CartProductList
                        labels={labels}
                        menuList={props.menuList}
                    />
                </div>
            </div>
        </div>
    );
};
export default CartContainer;
