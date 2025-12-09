import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { renderRoutes } from 'react-router-config';
import appConstants from '../../appConstants/appConstants';
import appUrls from '../../appConstants/appUrls';
import MenuListHeaderContainer from '../../containers/menu/MenuListHeaderContainer';
import InfoMessage from '../../components/infoMessage/InfoMessage';
import { setMenuItemFilter } from '../../actions/menuAction';
import { setRestroCode } from '../../actions/cartAction';
import { getRestroList } from '../../actions/restroAction';

class MenuListPage extends Component {
    componentWillMount() {
        this.props.getRestroList();
        this.props.setRestroCode('');
    }

    setFilerbyRestoCode(restroCode, cb) {
        const { menuList } = this.props;
        const filteredList = menuList.filter(item =>
            item.restaurantCode.toLowerCase().includes(restroCode.toLowerCase())
        );
        this.props.setMenuItemFilter(filteredList, cb());
    }
    changeSearchHandler(searchText) {
        const { restroCode } = this.props.cart;
        const { menuList } = this.props;
        const filteredList = searchText.length
            ? menuList.filter((item) => {
                const isInItemName = item.itemName
                    .toLowerCase()
                    .includes(searchText.toLowerCase());
                const isInRestro = item.restaurantCode
                    .toLowerCase()
                    .includes(restroCode.toLowerCase());
                return isInItemName && isInRestro;
            })
            : menuList;
        this.props.setMenuItemFilter(filteredList);
    }
    changeRestroHandler(restroCode) {
        const crossElm = document.querySelector('.menuList-search button');
        if (crossElm) {
            crossElm.click();
        }
        this.props.setRestroCode(restroCode);
        this.setFilerbyRestoCode(restroCode, () => {
            this.props.history.push(`${appUrls.MENU_LIST}/${restroCode}`);
        });
    }

    render() {
        const { restaurants = [] } = this.props.restro;
        const { restroCode } = this.props.cart;
        const restroSelectError = 'Please select the restaurant';
        return (
            <div className="menu-list-page">
                <MenuListHeaderContainer
                    labels={appConstants.labels}
                    searchBoxHandler={(text) => {
                        this.changeSearchHandler(text);
                    }}
                    restaurants={restaurants}
                    changeRestroHandler={(code) => {
                        this.changeRestroHandler(code);
                    }}
                    defaultValue={restroCode}
                />
                {!restroCode && (
                    <InfoMessage
                        message={restroSelectError}
                        infoClass="alert-warning"
                    />
                )}
                {renderRoutes(this.props.route.routes)}
            </div>
        );
    }
}
const mapStateToProps = state => ({
    menuList: (state.menu && state.menu.menuList) || [],
    restro: state.restro,
    cart: state.cart
});
const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            setMenuItemFilter,
            setRestroCode,
            getRestroList
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuListPage);
