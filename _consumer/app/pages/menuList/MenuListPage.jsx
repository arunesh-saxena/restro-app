import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import appConstants from '../../appConstants/appConstants';
import MenuListContainer from '../../containers/menu/MenuListContainer';
import { getMenuList, setMenuItemFilter } from '../../actions/menuAction';
import { addToCart } from '../../actions/cartAction';

class MenuListPage extends Component {
    addToCartHandler(item) {
        const data = {
            itemId: item.itemId,
            quantity: 1
        };
        this.props.addToCart(data);
    }
    changeSearchHandler(searchText) {
        const { menuList } = this.props;
        const filteredList = searchText.length
            ? menuList.filter(item =>
                item.itemName.toLowerCase().includes(searchText.toLowerCase())
            )
            : menuList;
        this.props.setMenuItemFilter(filteredList);
    }
    render() {
        const menuList = this.props.menuListFiltered;
        return (
            <div>
                <MenuListContainer
                    labels={appConstants.labels}
                    menuList={menuList}
                    addToCartHandler={(item) => {
                        this.addToCartHandler(item);
                    }}
                    searchBoxHandler={(text) => {
                        this.changeSearchHandler(text);
                    }}
                />
            </div>
        );
    }
}
const mapStateToProps = state => ({
    menuList: (state.menu && state.menu.menuList) || [],
    menuListFiltered: (state.menu && state.menu.menuListFiltered) || []
});
const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            getMenuList,
            setMenuItemFilter,
            addToCart
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuListPage);
