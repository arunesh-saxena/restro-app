import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import qs from 'query-string';
import { getOrderStatus } from '../../actions/cartAction';
import OrderStatusContainer from '../../containers/order/OrderStatusContainer';
import appConstants from '../../appConstants/appConstants';

class OrderStatusPage extends React.Component {
    componentDidMount() {
        const { tokenId } = qs.parse(this.props.location.search, {
            ignoreQueryPrefix: true
        });
        this.props.getOrderStatus({ tokenId });
    }

    render() {
        return (
            <div className="order-status-page">
                <OrderStatusContainer
                    placedOrder={this.props.cart.placedOrder || {}}
                    labels={appConstants.labels}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    cart: state.cart
});
const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            getOrderStatus
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderStatusPage);
