import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LoginContainer from '../../containers/login/LoginContainer'
import { submitLogin } from '../../actions/loginAction';
import appConstants from '../../appConstants/appConstants';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleSignInSubmit = this.handleSignInSubmit.bind(this);
    }
    componentWillUnmount() {
        // this.props.signUp({});
    }
    handleSignInSubmit(e) {
        e.preventDefault();
        const formInfo = this.props.formInfo;

        if (formInfo && !formInfo.syncErrors) {
            const formData = formInfo.values;
            this.props.submitLogin(formData);
        }
    }
    render() {
        return (
            <div>
                <LoginContainer handleSignInSubmit={this.handleSignInSubmit} formInfo={this.props.formInfo} loginData={this.props.login} labels={appConstants.labels}/>
            </div>
        );
    }
};

const mapStateToProps = state => ({
    formInfo: state.form && state.form.loginForm,
    login: state.user || {}

});

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        submitLogin
    }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginPage);