import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CartContainer from '../../containers/cart/CartContainer';
import appConstants from '../../appConstants/appConstants';
import { placeOrder } from '../../actions/cartAction';

class CartPage extends Component {
    constructor(props) {
        super();
        this.state = {
            orderTableId: null
        };
        this.dummyTableList = [
            {
                tableId: 1,
                label: 'Table # 1'
            },
            {
                tableId: 2,
                label: 'Table # 2'
            },

            {
                tableId: 3,
                label: 'Table # 3'
            },
            {
                tableId: 4,
                label: 'Table # 4'
            }
        ];
    }

    tableChangeHandler(tableID) {
        this.setState({
            orderTableId: tableID
        });
    }

    placeOrderClickHandler() {
        const { orderTableId } = this.state;
        const order = this.props.cart && this.props.cart.order;
        if (!orderTableId) {
            console.error('Please select the table');
            return;
        }
        if (order && order.length) {
            const orderData = {
                order,
                tableId: orderTableId
            };
            this.props.placeOrder(orderData, this.props);
        }
    }
    render() {
        return (
            <div className="cart-page">
                <CartContainer
                    labels={appConstants.labels}
                    menuList={this.props.menuList}
                    cart={this.props.cart}
                    tableList={this.dummyTableList}
                    placeOrderClickHandler={() => {
                        this.placeOrderClickHandler();
                    }}
                    tableChangeHandler={(tableID) => {
                        this.tableChangeHandler(tableID);
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
