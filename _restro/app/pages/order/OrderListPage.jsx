import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import appConstants from '../../appConstants/appConstants';
import OrderListContainer from '../../containers/order/OrderListContainer';
import appUrls from '../../appConstants/appUrls';
import commonUtils from '../../utils/commonUtils';
import {
    unSubscribeToMsg,
    emitMsg,
    subscribeOrderPlaced
} from '../../utils/socket';
import {
    getOrderList,
    updateOrder,
    setOrderList
} from '../../actions/orderAction';
import { getUserResautants } from '../../actions/myAccountAction';

class OrderListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            restroCode: ''
        };
    }
    componentWillMount() {
        const { username } = this.props.user;
        this.props.getUserResautants(username);
        this.initPage();
        subscribeOrderPlaced((data, err) => {
            if (err) {
                console.log(`Something wentwrong ${err}`);
            }
            if (!err) {
                this.props.getOrderList(() => {
                    this.initPage();
                });
            }
        });
    }
    componentWillUnmount() {
        unSubscribeToMsg();
    }
    orderActionHandler(tokenId, actionId) {
        this.props.updateOrder({ tokenId, actionId }, (order) => {
            emitMsg({
                tokenId: order.tokenId,
                orderStatus: order.orderStatus
            });
        });
    }
    restroChangeHandler(restroCode) {
        this.setState({
            restroCode
        });
        this.updateOrderList(restroCode);
        this.props.history.push(
            `${appUrls.ORDER_LIST}?restroCode=${restroCode}`
        );
    }
    initPage() {
        const queryString = commonUtils.parseQueryString(
            this.props.location.search
        );
        const restroCode = (queryString && queryString.restroCode) || null;
        if (restroCode) {
            this.setState({
                restroCode
            });
        }
        this.updateOrderList(restroCode);
    }
    updateOrderList(restroCode) {
        const { orders = [] } = this.props.order;
        orders.map((item) => {
            item.isFilter =
                !restroCode ||
                item.restaurantCode.toLowerCase() === restroCode.toLowerCase();
        });
        this.props.setOrderList(orders);
    }

    render() {
        return (
            <div className="order-page-container">
                <OrderListContainer
                    labels={appConstants.labels.order}
                    order={this.props.order}
                    actionList={this.props.myAccount.actions}
                    orderActionHandler={(tokenId, actionId) => {
                        this.orderActionHandler(tokenId, actionId);
                    }}
                    userRestaurants={this.props.myAccount.restaurants}
                    restroChangeHandler={(restroCode) => {
                        this.restroChangeHandler(restroCode);
                    }}
                    restroCode={this.state.restroCode}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    order: state.order,
    user: state.user,
    myAccount: state.myAccount
});
const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            getOrderList,
            updateOrder,
            getUserResautants,
            setOrderList
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderListPage);
