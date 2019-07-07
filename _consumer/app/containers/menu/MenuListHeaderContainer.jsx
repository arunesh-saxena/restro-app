import React from 'react';

import SearchBox from '../../components/SearchBox/SearchBox';
import Heading from '../../components/heading/Heading';
import RestroSelectList from '../../components/RestroSelectList/RestroSelectList';

const renderHeading = labels => <Heading text={labels.menuList} />;
const MenuListHeaderContainer = (props) => {
    const { restaurants = [], changeRestroHandler, defaultValue } = props;
    const { common: labels } = props.labels;

    return (
        <div className="menu-list-container">
            <div className="row justify-content-md-center">
                <div className="col-12 col-md-12">
                    <div className="heading-section">
                        {renderHeading(labels)}
                        <RestroSelectList
                            restaurants={restaurants}
                            changeHandler={changeRestroHandler}
                            defaultValue={defaultValue}
                        />
                        <SearchBox
                            className="menuList-search"
                            searchLabel={labels.search}
                            changeHandler={props.searchBoxHandler}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuListHeaderContainer;
