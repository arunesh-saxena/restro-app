import React from 'react';
import { renderRoutes } from 'react-router-config';

export default class MenuListPage extends React.Component {
    componentDidMount(){
        console.log('-----MenuListPage------');
    }
    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <h1>MenuListPage</h1>
                {renderRoutes(this.props.route.routes)}
            </div>);
    }
};