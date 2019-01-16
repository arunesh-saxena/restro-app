import React from 'react';
import LoginContainer from '../../containers/login/LoginContainer'

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleSignInSubmit = this.handleSignInSubmit.bind(this);
    }
    handleSignInSubmit(e) {
        e.preventDefault();
        console.log('handleSignInSubmit');
    }
    render() {
        return (
            <div>
                <LoginContainer handleSignInSubmit={this.handleSignInSubmit} />
            </div>
        );
    }
};