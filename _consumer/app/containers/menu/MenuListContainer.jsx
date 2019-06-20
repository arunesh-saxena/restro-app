import React from 'react';

import MenuItem from '../../components/menuItem/MenuItem';
import SearchBox from '../../components/SearchBox/SearchBox';
import Heading from '../../components/heading/Heading';

const renderHeading = labels => <Heading text={labels.menuList} />;

const renderMenuList = (menuList, labels, addToCartHandler, toggleHandler) => {
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
};
const MenuListContainer = (props) => {
    const { menuList, addToCartHandler, toggleHandler } = props;
    const { common: labels } = props.labels;

    return (
        <div className="menu-list-container">
            <div className="row justify-content-md-center">
                <div className="col-12 col-md-12">
                    <div className="heading-section">
                        {renderHeading(labels)}
                        <SearchBox
                            className="menuList-search"
                            searchLabel={labels.search}
                            changeHandler={props.searchBoxHandler}
                        />
                    </div>
                    {renderMenuList(
                        menuList,
                        labels,
                        addToCartHandler,
                        toggleHandler
                    )}
                </div>
            </div>
        </div>
    );
};

export default MenuListContainer;
