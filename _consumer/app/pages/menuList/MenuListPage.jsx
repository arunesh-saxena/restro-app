import React, { Component } from 'react';
import appConstants from '../../appConstants/appConstants';
import MenuListContainer from '../../containers/menu/MenuListContainer';

export default class MenuListPage extends Component {
    componentDidMount() {
        console.log('-----MenuListPage------');
    }

    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <h1>MenuListPage</h1>
                <MenuListContainer
                    labels={appConstants.labels}
                    menuList={[]}
                    quantityHandler={(itemData) => {}}
                    searchBoxHandler={(text) => {}}
                />
            </div>
        );
    }
}
