import React from 'react';
import { renderRoutes } from 'react-router-config';

export default class MenuUploadPage extends React.Component {
    componentDidMount(){
        console.log('-----MenuUploadPage------');
    }
    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <h1>MenuUploadPage</h1>
                {renderRoutes(this.props.route.routes)}
            </div>);
    }
};