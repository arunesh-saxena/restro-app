import React from 'react';

import { Link } from 'react-router-dom';
import AppUrls from '../../appConstants/appUrls';
import MenuItem from '../../components/menuItem/MenuItem';
import SearchBox from '../../components/SearchBox/SearchBox';
import Heading from '../../components/heading/Heading';
import ServerMsg from '../../components/serverMsg/ServerMsg';
import RestroSelectList from '../../components/RestroSelectList/RestroSelectList';

const renderHeading = labels => <Heading text={labels.menuList} />;

const renderMenuList = (menuList, labels, quantityHandler, toggleHandler) => {
    if (!menuList || !menuList.length) {
        return (
            <p>
                {labels.empty} {labels.list}
                <Link to={AppUrls.ADD_MENU}>{labels.addMenu}</Link>
            </p>
        );
    }

    const liElm = menuList.map((item, index) => (
        <li key={index} className="list-group-item">
            <MenuItem
                labels={labels}
                item={item}
                quantityHandler={quantityHandler}
                toggleHandler={toggleHandler}
            />
        </li>
    ));

    return <ul className="list-group">{liElm}</ul>;
};
const MenuListContainer = (props) => {
    const {
        menuList,
        quantityHandler,
        toggleHandler,
        userRestaurants = []
    } = props;
    const { common: labels } = props.labels;
    const changeHandler = (text) => {
        props.searchBoxHandler({
            type: 'itemName',
            searchText: text
        });
    };
    const RestroChangeHandler = (text) => {
        props.searchBoxHandler({
            type: 'restro',
            searchText: text
        });
    };
    return (
        <div className="menu-list-container">
            <div className="row justify-content-md-center">
                <div className="col-xs-12 col-md-12">
                    <div className="heading-section">
                        {renderHeading(labels)}
                        <RestroSelectList
                            restaurants={userRestaurants}
                            label={labels.selectRestaurant}
                            changeHandler={RestroChangeHandler}
                        />
                        <SearchBox
                            className="menuList-search"
                            searchLabel={labels.search}
                            changeHandler={changeHandler}
                        />
                    </div>
                    <ServerMsg />
                    {renderMenuList(
                        menuList,
                        labels,
                        quantityHandler,
                        toggleHandler
                    )}
                </div>
            </div>
        </div>
    );
};

export default MenuListContainer;
