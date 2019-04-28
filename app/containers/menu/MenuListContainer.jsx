import React from 'react';

import { Link } from 'react-router-dom';
import AppUrls from '../../appConstants/appUrls';
import MenuItem from '../../components/menuItem/MenuItem';

const renderHeading = (labels) => {
    return (
        <h1>
            {labels.menuList}
        </h1>
    );
};
const renderMenuList = (menuList, labels) => {
    if (!menuList || !menuList.length) {
        return (
            <p>{labels.empty} {labels.list} <Link to={AppUrls.ADD_MENU}>{labels.addMenu}</Link></p>
        );
    }

    const liElm = menuList.map((item, index) => {
        return (
            <li key={index}
                className='list-group-item'>
                <MenuItem labels={labels} item={item} />
            </li>
        );
    });

    return (
        <ul className='list-group'>{liElm}</ul>
    )
};
const MenuListContainer = (props) => {
    const {
        menuList,
    } = props;
    const { common: labels } = props.labels;

    return (
        <div className="menu-list-container">
            <div className="row justify-content-md-center">
                <div className="col-xs-12 col-md-12">
                    {renderHeading(labels)}
                    {renderMenuList(menuList, labels)}
                </div>
            </div>
        </div>
    )
};

export default MenuListContainer;