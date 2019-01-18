import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SignUpContainer from '../../containers/signup/SignUpContainer';
class SignUpPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleSignUpSubmit = this.handleSignUpSubmit.bind(this);
    }
    handleSignUpSubmit(e, v) {
        e.preventDefault();
        console.log(this.props.formInfo);
        console.log('handleSignUpSubmit');
    }
    render() {
        return (
            <div>
                <SignUpContainer handleSignUpSubmit={this.handleSignUpSubmit} formInfo={this.props.formInfo}/>
            </div>
        );
    }
};

const mapStateToProps = state => ({
    formInfo: state.form && state.form.signUp && state.form.signUp

});

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        
    }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUpPage);
