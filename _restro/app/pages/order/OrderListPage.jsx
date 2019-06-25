import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import appConstants from '../../appConstants/appConstants';
import OrderListContainer from '../../containers/order/OrderListContainer';

class OrderListPage extends Component {
    render() {
        return (
            <div className="order-page-container">
                <OrderListContainer labels={appConstants.labels.order} />
            </div>
        );
    }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderListPage);
