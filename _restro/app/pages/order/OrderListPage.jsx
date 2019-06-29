import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import appConstants from '../../appConstants/appConstants';
import OrderListContainer from '../../containers/order/OrderListContainer';
import { getOrderList, updateOrder } from '../../actions/orderAction';

class OrderListPage extends Component {
    orderActionHandler(tokenId, actionId) {
        console.log('orderActionHandler', tokenId, actionId);
        this.props.updateOrder({ tokenId, actionId });
    }
    render() {
        return (
            <div className="order-page-container">
                <OrderListContainer
                    labels={appConstants.labels.order}
                    order={this.props.order}
                    orderActionHandler={(tokenId, actionId) => {
                        this.orderActionHandler(tokenId, actionId);
                    }}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    order: state.order
});
const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            getOrderList,
            updateOrder
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderListPage);
