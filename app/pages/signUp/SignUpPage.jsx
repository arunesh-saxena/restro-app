import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { submitSignUp } from '../../actions/signUpAction';

import SignUpContainer from '../../containers/signup/SignUpContainer';
class SignUpPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleSignUpSubmit = this.handleSignUpSubmit.bind(this);
    }
    handleSignUpSubmit(e, v) {
        e.preventDefault();
        const formInfo = this.props.formInfo;

        if (formInfo && !formInfo.syncErrors) {
            const formData = formInfo.values;
            this.props.submitSignUp(formData);
        }
    }
    render() {
        return (
            <div>
                <SignUpContainer handleSignUpSubmit={this.handleSignUpSubmit} formInfo={this.props.formInfo} />
            </div>
        );
    }
};

const mapStateToProps = state => ({
    formInfo: state.form && state.form.signUp && state.form.signUp

});

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        submitSignUp
    }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUpPage);
