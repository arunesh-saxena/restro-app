import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CartContainer from '../../containers/cart/CartContainer';
import appConstants from '../../appConstants/appConstants';

class CartPage extends Component {
    render() {
        return (
            <div className="cart-page">
                <CartContainer
                    labels={appConstants.labels}
                    menuList={this.props.menuList}
                />
            </div>
        );
    }
}
const mapStateToProps = state => ({
    menuList: (state.menu && state.menu.menuList) || []
});
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartPage);
