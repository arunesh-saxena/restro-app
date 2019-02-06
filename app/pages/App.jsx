import React from 'react';
import AppContainer from '../containers/AppContainer';
import appConstants from '../appConstants/appConstants';
class App extends React.Component {
    constructor() {
        super();
    }
    render() {
        const props = this.props;
        const labels = appConstants.labels;
        return (
            <div className="app-page">
                <AppContainer { ...props} labels={labels}/>
            </div>);
    }
};

export default App;