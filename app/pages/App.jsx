import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AppContainer from '../containers/AppContainer';
import appConstants from '../appConstants/appConstants';
import { logOutAction } from '../actions/logOutAction';

class App extends React.Component {
    constructor() {
        super();
        this.handleLogout = this.handleLogout.bind(this);
    }
    handleLogout() {
        this.props.logOutAction();
    }
    render() {
        const props = Object.assign({}, this.props, {
            labels: appConstants.labels,
            handleLogout: this.handleLogout
        });

        return (
            <div className="app-page">
                <AppContainer {...props} />
            </div>);
    }
};

const mapStateToProps = state => ({
    user: state.user
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        logOutAction
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);