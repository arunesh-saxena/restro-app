import React from 'react';
import { renderRoutes } from 'react-router-config';

export default class AboutUsPage extends React.Component {
    componentDidMount() {
        console.log('-----AboutUsPage------');
    }

    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <h1>AboutUsPage</h1>
                {renderRoutes(this.props.route.routes)}
            </div>
        );
    }
}
