import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import appConstants from '../../appConstants/appConstants';
import OrderListContainer from '../../containers/order/OrderListContainer';
import { getOrderList, updateOrder } from '../../actions/orderAction';
import { getUserResautants } from '../../actions/myAccountAction';

class OrderListPage extends Component {
    componentWillMount() {
        const { username } = this.props.user;
        this.props.getUserResautants(username);
    }
    orderActionHandler(tokenId, actionId) {
        this.props.updateOrder({ tokenId, actionId });
    }
    restroChangeHandler(restroCode) {
        console.log('todo: ', restroCode);
        const filteredList = restroCode
            ? this.order.orders.filter(
                item =>
                    item.restaurantCode &&
                      item.restaurantCode
                          .toLowerCase()
                          .includes(restroCode.toLowerCase())
            )
            : this.order.orders;
        console.log(filteredList);
    }

    actionDummy() {
        return [
            {
                actionId: 1,
                label: 'Action# 1'
            },
            {
                actionId: 2,
                label: 'Action# 2'
            },
            {
                actionId: 3,
                label: 'Action# 3'
            },
            {
                actionId: 4,
                label: 'Action# 4'
            },
            {
                actionId: 5,
                label: 'Action# 5'
            }
        ];
    }
    render() {
        return (
            <div className="order-page-container">
                <OrderListContainer
                    labels={appConstants.labels.order}
                    order={this.props.order}
                    actionList={this.actionDummy()}
                    orderActionHandler={(tokenId, actionId) => {
                        this.orderActionHandler(tokenId, actionId);
                    }}
                    userRestaurants={this.props.myAccount.restaurants}
                    restroChangeHandler={this.restroChangeHandler}
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
            getUserResautants
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderListPage);
