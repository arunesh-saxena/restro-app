import React from 'react';
import AppContainer from '../containers/AppContainer';
class App extends React.Component {
    constructor() {
        super();
        console.log('app.jsx');
    }
    componentDidMount() {
        console.log('-----csr app.jsx------');
        console.log(process.env.NODE_ENV);
    }
    render() {
        const props = this.props;
        return (
            <div className="app-page">
                <AppContainer { ...props} />
            </div>);
    }
};

export default App;