import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getOrderStatus } from '../../actions/cartAction';

class OrderStatusPage extends React.Component {
    componentDidMount() {
        console.log('-----OrderStatusPage------');
        this.props.getOrderStatus({ tokenId: 2 });
    }

    render() {
        return (
            <div className="order-status-page">
                <h1>OrderStatusPage</h1>
            </div>
        );
    }
}

const mapStateToProps = state => ({});
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
