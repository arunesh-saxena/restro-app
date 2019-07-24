import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getOrderStatus } from '../../actions/cartAction';
import OrderStatusContainer from '../../containers/order/OrderStatusContainer';
import appConstants from '../../appConstants/appConstants';
import commonUtil from '../../utils/commonUtils';

class OrderStatusPage extends React.Component {
    componentDidMount() {
        const { tokenId } = commonUtil.parseQueryString(
            this.props.location.search
        );
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
