import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AppContainer from '../containers/AppContainer';
import appConstants from '../appConstants/appConstants';

class App extends React.Component {
    constructor() {
        super();
    }
    render() {
        const props = Object.assign({}, this.props, {
            labels: appConstants.labels,
            handleLogout: this.handleLogout
        });

        return (
            <div className="app-page">
                <AppContainer {...props} />
            </div>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
