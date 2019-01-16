import React from 'react';

let SignUpContainer = (props) => {
    const {
        handleSignUpSubmit,
    } = props;
    let getLoginHeading = () => {
        return (
            <h1
                className="form-heading h2"
            >
                Sign Up
            </h1>
        );
    };
    let renderLoginForm = () => {
        return (
            <form onSubmit={handleSignUpSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="username" className="form-control" id="username" placeholder="Enter username" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="userPassword">Password</label>
                    <input type="password" className="form-control" id="userPassword" placeholder="Password" />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm password</label>
                    <input type="confirmPassword" className="form-control" id="confirmPassword" placeholder="Confirm password" />
                </div>
                <button type="submit" className="col btn btn-primary">Submit</button>
            </form>
        );
    };
    return (
        <div className="sign-form-container">
            <div className="row justify-content-md-center">
                <div className="col-xs-12 col-md-6">
                    {getLoginHeading()}
                    {renderLoginForm()}
                </div>
            </div>
        </div>
    )
};

export default SignUpContainer;