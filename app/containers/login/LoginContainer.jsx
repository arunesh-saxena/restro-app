import React, { Component } from 'react';

let LoginContainer = (props) => {
    const {
        handleSignInSubmit,
    } = props;
    let getLoginHeading = () => {
        return (
            <h1
                className="form-heading h2"
            >
                Log In
            </h1>
        );
    }
    let renderLoginForm = () => {
        return (
            <form onSubmit={handleSignInSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Password" />
                </div>
                <button type="submit" className="col btn btn-primary">Submit</button>
            </form>
        );
    }
    return (
        <div className="login-form-container">
            <div className="row justify-content-md-center">
                <div className="col-xs-12 col-md-6">
                    {getLoginHeading()}
                    {renderLoginForm()}
                </div>
            </div>
        </div>
    )
};

export default LoginContainer;