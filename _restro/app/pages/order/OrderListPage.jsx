import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import appConstants from '../../appConstants/appConstants';
import OrderListContainer from '../../containers/order/OrderListContainer';
import { getOrderList } from '../../actions/orderAction';

class OrderListPage extends Component {
    render() {
        return (
            <div className="order-page-container">
                <OrderListContainer
                    labels={appConstants.labels.order}
                    order={this.props.order}
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
            getOrderList
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderListPage);
