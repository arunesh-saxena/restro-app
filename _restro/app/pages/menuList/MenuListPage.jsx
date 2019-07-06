import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MenuListContainer from '../../containers/menu/MenuListContainer';
import appConstants from '../../appConstants/appConstants';
import {
    getMenuList,
    changeMenuItemQuantity,
    toggleHiddenMenuItem,
    setMenuItemFilter
} from '../../actions/menuAction';
import { getUserResautants } from '../../actions/myAccountAction';

class MenuListPage extends Component {
    componentWillMount() {
        const { username } = this.props.user;
        this.props.getUserResautants(username);
    }
    changeProductQuantity(item) {
        const itemData = {
            itemId: item.itemId,
            quantity: item.quantity
        };
        this.props.changeMenuItemQuantity(itemData);
    }

    toggleHandler(data) {
        this.props.toggleHiddenMenuItem(data);
    }

    changeSearchHandler({ type, searchText }) {
        const { menuList } = this.props;
        let filteredList = [];
        if (type === 'itemName') {
            filteredList = searchText.length
                ? menuList.filter(item =>
                    item.itemName
                        .toLowerCase()
                        .includes(searchText.toLowerCase())
                )
                : menuList;
        }
        if (type === 'restro') {
            filteredList = searchText.length
                ? menuList.filter(item =>
                    item.restaurantCode
                        .toLowerCase()
                        .includes(searchText.toLowerCase())
                )
                : menuList;
        }
        this.props.setMenuItemFilter(filteredList);
    }

    render() {
        const menuList = this.props.menuListFiltered;
        return (
            <div>
                <MenuListContainer
                    labels={appConstants.labels}
                    menuList={menuList}
                    quantityHandler={(itemData) => {
                        this.changeProductQuantity(itemData);
                    }}
                    toggleHandler={value => this.toggleHandler(value)}
                    searchBoxHandler={(text) => {
                        this.changeSearchHandler(text);
                    }}
                    userRestaurants={this.props.myAccount.restaurants}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    menuList: (state.menu && state.menu.menuList) || [],
    menuListFiltered: (state.menu && state.menu.menuListFiltered) || [],
    user: state.user,
    myAccount: state.myAccount
});
const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            getMenuList,
            changeMenuItemQuantity,
            toggleHiddenMenuItem,
            setMenuItemFilter,
            getUserResautants
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuListPage);
