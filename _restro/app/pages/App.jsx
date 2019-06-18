import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AppContainer from '../containers/AppContainer';
import appConstants from '../appConstants/appConstants';
import { logOutAction } from '../actions/logOutAction';
// import { checkIsLogin } from '../actions/appAction';

class App extends React.Component {
    constructor() {
        super();
        this.handleLogout = this.handleLogout.bind(this);
        // this.checkIsLogin = this.checkIsLogin.bind(this);
    }

    // componentWillMount(){
    //     this.props.checkIsLogin();
    // }
    handleLogout() {
        this.props.logOutAction(this.props);
    }

    // checkIsLogin() {
    //     this.props.checkIsLogin();
    // }
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

const mapStateToProps = state => ({
    user: state.user
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            logOutAction
            // checkIsLogin
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
