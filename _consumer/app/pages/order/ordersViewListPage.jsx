import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import commonUtil from '../../utils/commonUtils';
import { subscribeToMsg, unSubscribeToMsg } from '../../utils/socket';
import appConstants from '../../appConstants/appConstants';
import {
    getRestroList,
    getRestroOrders,
    setRestroOrders
} from '../../actions/restroAction';
import OrderViewListContainer from '../../containers/order/OrderViewListContainer';
import appUrls from '../../appConstants/appUrls';

class ordersViewListPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            restroCode: null
        };
    }
    componentWillMount() {
        const { restroCode } = commonUtil.parseQueryString(
            this.props.location.search
        );
        this.setState({
            restroCode
        });
        if (restroCode) {
            this.props.getRestroOrders(restroCode);
        }
        subscribeToMsg((data, err) => {
            if (err) {
                console.log(`Something wentwrong ${err}`);
            }
            if (!err) {
                this.updateTile(data);
            }
        });
    }
    componentWillUnmount() {
        unSubscribeToMsg();
        this.props.setRestroOrders([]);
    }
    updateTile(tileInfo) {
        const { restroOrders } = this.props.orders;
        const { data } = tileInfo;
        const order = restroOrders.find(
            item => parseInt(item.tokenId) === parseInt(data.tokenId)
        );
        if (order) {
            order.orderStatus = data.orderStatus;
            this.props.setRestroOrders(restroOrders);
        }
    }
    changeRestroHandler(restroCode) {
        this.setState(
            {
                restroCode
            },
            () => {
                this.props.getRestroOrders(restroCode);
                this.props.history.push(
                    `${appUrls.ORDERS_VIEW_LIST}?restroCode=${restroCode}`
                );
            }
        );
    }
    getActionStatus(orderStatusId) {
        const { actions } = this.props.restro;
        const actionDetails = actions.find(
            item => item.actionId === parseInt(orderStatusId)
        );
        const actionName =
            (actionDetails && actionDetails.actionName) || orderStatusId;
        return actionName;
    }
    render() {
        const { restroCode } = this.state;
        const { restro, orders } = this.props;
        const labels = appConstants.labels.orders;
        return (
            <div className="orders-view-list-page">
                <OrderViewListContainer
                    labels={labels}
                    restroCode={restroCode}
                    restaurants={restro.restaurants}
                    changeRestroHandler={(value) => {
                        this.changeRestroHandler(value);
                    }}
                    defaultValue={restroCode}
                    orders={(orders && orders.restroOrders) || []}
                    getActionStatus={orderStatusId =>
                        this.getActionStatus(orderStatusId)
                    }
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    restro: state.restro,
    orders: state.orders
});
const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            getRestroList,
            getRestroOrders,
            setRestroOrders
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ordersViewListPage);
