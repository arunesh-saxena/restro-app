import React from 'react';

import { Link } from 'react-router-dom';
import AppUrls from '../../appConstants/appUrls';


const renderHeading = (labels) => {
    return (
        <h1>
            {labels}
        </h1>
    );
};

const MenuEditContainer = (props) => {
    const {
        menuItem,
    } = props;
    const { common: labels } = props.labels;

    return (
        <div className="menu-edit-container">
            <div className="row justify-content-md-center">
                <div className="col-xs-12 col-md-12">
                    {renderHeading(menuItem && menuItem.itemName)}
                </div>
            </div>
        </div>
    )
};

export default MenuEditContainer;