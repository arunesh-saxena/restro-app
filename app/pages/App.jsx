import React from 'react';
import AppContainer from '../containers/AppContainer';
class App extends React.Component {
    constructor() {
        super();
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