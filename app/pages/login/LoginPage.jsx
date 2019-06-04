import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LoginContainer from '../../containers/login/LoginContainer';
import { submitLogin, setErrorMsg } from '../../actions/loginAction';
import appConstants from '../../appConstants/appConstants';
import appUrls from '../../appConstants/appUrls';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleSignInSubmit = this.handleSignInSubmit.bind(this);
    }

    componentDidMount() {
        const loginData = this.props.login;
        if (loginData && loginData.username) {
            this.props.history.push(appUrls.MENU_LIST);
        }
    }

    componentWillUnmount() {
        this.props.setErrorMsg({ msg: null });
    }

    handleSignInSubmit(e) {
        e.preventDefault();
        const { formInfo } = this.props;

        if (formInfo && !formInfo.syncErrors) {
            const formData = formInfo.values;
            this.props.submitLogin(formData, this.props);
        }
    }

    render() {
        return (
            <div>
                <LoginContainer
                    handleSignInSubmit={this.handleSignInSubmit}
                    formInfo={this.props.formInfo}
                    loginData={this.props.login}
                    labels={appConstants.labels}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    formInfo: state.form && state.form.loginForm,
    login: state.user || {},
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            submitLogin,
            setErrorMsg,
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginPage);
