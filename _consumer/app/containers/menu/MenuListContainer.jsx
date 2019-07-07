import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import appConstants from '../../appConstants/appConstants';
import { getMenuList, setMenuItemFilter } from '../../actions/menuAction';
import { addToCart, setRestroCode } from '../../actions/cartAction';
import { getRestroList } from '../../actions/restroAction';
import MenuItem from '../../components/menuItem/MenuItem';
import Heading from '../../components/heading/Heading';

class MenuListContainer extends Component {
    componentWillMount() {
        const { restroCode } = this.props.match.params;
        this.props.setRestroCode(restroCode);
    }
    addToCartHandler(item) {
        const data = {
            itemId: item.itemId,
            quantity: 1
        };
        this.props.addToCart(data);
    }

    renderHeading(text) {
        return <Heading text={text} />;
    }

    renderMenuList(menuList, labels, addToCartHandler, toggleHandler) {
        if (!menuList || !menuList.length) {
            return (
                <p>
                    {labels.empty} {labels.list}
                    {/* <Link to={AppUrls.ADD_MENU}>{labels.addMenu}</Link> */}
                </p>
            );
        }

        const liElm = menuList.map((item, index) => (
            <li key={index} className="list-group-item">
                <MenuItem
                    labels={labels}
                    item={item}
                    addToCartHandler={addToCartHandler}
                />
            </li>
        ));
        return <ul className="list-group">{liElm}</ul>;
    }
    render() {
        const { menuListFiltered } = this.props;
        const { restroCode } = this.props.match.params;
        const { common: labels } = appConstants.labels;
        const restaurant =
            (this.props.restro &&
                this.props.restro.restaurants.filter(
                    v =>
                        v.restaurantCode.toLowerCase() ===
                        restroCode.toLowerCase()
                )) ||
            [];
        const restaurantName = restaurant.length
            ? restaurant[0].restaurantName
            : restroCode;

        return (
            <div className="menu-list-container">
                <div className="row justify-content-md-center">
                    <div className="col-12 col-md-12">
                        <div className="heading-section">
                            {this.renderHeading(`Menu for ${restaurantName}`)}
                        </div>
                        {!restroCode && <p>Please select the restaurant</p>}
                        {restroCode &&
                            this.renderMenuList(
                                menuListFiltered,
                                labels,
                                (item) => {
                                    this.addToCartHandler(item);
                                },
                                this.toggleHandler
                            )}
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    menuListFiltered: (state.menu && state.menu.menuListFiltered) || [],
    restro: state.restro
});
const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            getMenuList,
            setMenuItemFilter,
            addToCart,
            getRestroList,
            setRestroCode
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuListContainer);
