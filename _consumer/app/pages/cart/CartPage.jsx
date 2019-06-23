import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CartContainer from '../../containers/cart/CartContainer';
import appConstants from '../../appConstants/appConstants';
import { placeOrder } from '../../actions/cartAction';

class CartPage extends Component {
    placeOrderClickHandler() {
        console.log('Todo: place placeOrderClickHandler');
        const order = this.props.cart && this.props.cart.order;
        if (order && order.length) {
            const orderData = {
                order,
                tableId: 1
            };
            console.log('coming soon', orderData);
            this.props.placeOrder(orderData);
        }
    }
    render() {
        return (
            <div className="cart-page">
                <CartContainer
                    labels={appConstants.labels}
                    menuList={this.props.menuList}
                    cart={this.props.cart}
                    placeOrderClickHandler={() => {
                        this.placeOrderClickHandler();
                    }}
                />
            </div>
        );
    }
}
const mapStateToProps = state => ({
    menuList: (state.menu && state.menu.menuList) || [],
    cart: (state.cart && state.cart) || null
});
const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            placeOrder
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartPage);
