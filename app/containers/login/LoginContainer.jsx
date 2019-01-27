import React from 'react';
import { Field, reduxForm } from 'redux-form';


const validate = values => {
    const errors = {};
    if (!values.username) {
        errors.username = 'Required'
    } else if (values.username.length > 15) {
        errors.username = 'Must be 15 characters or less'
    }
    if (!values.password) {
        errors.password = 'Required'
    }
    return errors
};

const renderField = ({
    input,
    id,
    placeholder,
    type,
    className,
    meta: { touched, error, warning }
}) => (
        <div>
            <input {...input} id={id} placeholder={placeholder} type={type} className={className} autoComplete="off" />
            {touched &&
                ((error && <span className="error-message">{error}</span>) ||
                    (warning && <span>{warning}</span>))}
        </div>
    );

let LoginContainer = (props) => {
    const {
        handleSignInSubmit,
        pristine,
        submitting,
        formInfo
    } = props;
    let getLoginHeading = () => {
        return (
            <h1 className="form-heading h2"> Log In </h1>
        );
    };

    let renderLoginForm = () => {
        return (
            <form onSubmit={handleSignInSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username<sup>*</sup></label>
                    {/* <input type="text" className="form-control" id="username" placeholder="username" /> */}
                    <Field name="username" type="text" component={renderField} className="form-control" id="username" placeholder="Enter username" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password<sup>*</sup></label>
                    <Field name="password" type="password" component={renderField} className="form-control" id="password" placeholder="Password" />
                </div>
                <button type="submit" disabled={pristine || submitting || formInfo.syncErrors} className="col btn btn-primary">Submit</button>
            </form>
        );
    };
    const successMsg = () => {
        const login = props.login;

        if(!Object.keys(login).length){
            return '';
        }
        let msg = '';
        let className = 'alert';
        if (login && login.loginStatus ) {
            className+=' alert-success'
            msg = 'Thank you for signUp';
        }else {
            className+=' alert-dark'
            msg = 'Somthing went wrong todp handle this';
        }
        return (
            <p className={className}>{msg}</p>
        );
    }
    return (
        <div className="login-form-container">
            <div className="row justify-content-md-center">
                <div className="col-xs-12 col-md-6">
                    {getLoginHeading()}
                    {renderLoginForm()}
                    {successMsg()}
                </div>
            </div>
        </div>
    )
};

LoginContainer = reduxForm({
    form: 'loginForm',
    validate
})(LoginContainer);
export default LoginContainer;
