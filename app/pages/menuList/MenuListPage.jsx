import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MenuListContainer from '../../containers/menu/MenuListContainer';
import appConstants from '../../appConstants/appConstants';
import { getMenuList, changeMenuItemQuantity, toggleHiddenMenuItem } from '../../actions/menuAction';

class MenuListPage extends React.Component {
    componentDidMount() {
        this.props.getMenuList();
    }
    changeProductQuantity(item) {
        const itemData = {
            itemId: item.itemId,
            quantity: item.quantity
        };
        this.props.changeMenuItemQuantity(itemData);
    }
    toggleHandler(data){
        this.props.toggleHiddenMenuItem(data);
    }
    render() {
        return (
            <div>
                <MenuListContainer
                    labels={appConstants.labels}
                    menuList={this.props.menuList}
                    quantityHandler={(itemData) => { this.changeProductQuantity(itemData) }}
                    toggleHandler={(value) => this.toggleHandler(value)} />
            </div>);
    }
};


const mapStateToProps = state => ({
    menuList: state.menu && state.menu.menuList || []

});
const mapDispatchToProps = dispatch =>
    bindActionCreators({
        getMenuList,
        changeMenuItemQuantity,
        toggleHiddenMenuItem
    }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuListPage);