import React, { Component } from 'react';

import SignUpContainer from '../../containers/signup/SignUpContainer';
export default class SignUpPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleSignUpSubmit = this.handleSignUpSubmit.bind(this);
    }
    handleSignUpSubmit(e) {
        e.preventDefault();
        console.log('handleSignUpSubmit');
    }
    render() {
        return (
            <div>
                <SignUpContainer handleSignUpSubmit={this.handleSignUpSubmit} />
            </div>
        );
    }
};
