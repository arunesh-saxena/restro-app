import React from 'react';
import Loadable from 'react-loadable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { submitSignUp, signUp } from '../../actions/signUpAction';
import appConstants from '../../appConstants/appConstants';

const SignUpContainer = Loadable({
    loader: () =>
        import(
            /* webpackChunkName: "SignUpContainer" */ '../../containers/signup/SignUpContainer'
        ),
    loading: () => <strong>Loading...</strong>
});
class SignUpPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleSignUpSubmit = this.handleSignUpSubmit.bind(this);
    }

    componentWillUnmount() {
        this.props.signUp({});
    }

    handleSignUpSubmit(e, v) {
        e.preventDefault();
        const { formInfo } = this.props;

        if (formInfo && !formInfo.syncErrors) {
            const formData = formInfo.values;
            this.props.submitSignUp(formData);
        }
    }

    render() {
        return (
            <div>
                <SignUpContainer
                    handleSignUpSubmit={this.handleSignUpSubmit}
                    formInfo={this.props.formInfo}
                    userData={this.props.userData}
                    labels={appConstants.labels}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    formInfo: state.form && state.form.signUp,
    userData: state.signUp
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            submitSignUp,
            signUp
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUpPage);
