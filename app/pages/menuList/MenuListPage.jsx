import React from 'react';
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

class MenuListPage extends React.Component {
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
                    quantityHandler={(itemData) => {
                        this.changeProductQuantity(itemData);
                    }}
                    toggleHandler={value => this.toggleHandler(value)}
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
            changeMenuItemQuantity,
            toggleHiddenMenuItem,
            setMenuItemFilter
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuListPage);
