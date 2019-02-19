import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { loginValidate } from '../../utils/formValidation';

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
        formInfo,
    } = props;
    const { common: labels } = props.labels;

    let getLoginHeading = () => {
        return (
            <h1 className="form-heading h2">{labels.login}</h1>
        );
    };

    let renderLoginForm = () => {
        return (
            <form onSubmit={handleSignInSubmit}>
                <div className="form-group">
                    <label htmlFor="username">{labels.username}<sup>*</sup></label>
                    {/* <input type="text" className="form-control" id="username" placeholder="username" /> */}
                    <Field name="username" type="text" component={renderField} className="form-control" id="username" placeholder={labels.enterUsername} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">{labels.password}<sup>*</sup></label>
                    <Field name="password" type="password" component={renderField} className="form-control" id="password" placeholder={labels.password} />
                </div>
                <button type="submit" disabled={pristine || submitting || formInfo.syncErrors} className="col btn btn-primary">{labels.submit}</button>
            </form>
        );
    };
    const successMsg = () => {
        const login = props.login;

        if (!Object.keys(login).length) {
            return '';
        }
        let msg = '';
        let className = 'alert';
        if (login && login.loginStatus) {
            className += ' alert-success'
            msg = 'Thank you for signUp';
        } else {
            className += ' alert-dark'
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
    validate: loginValidate
})(LoginContainer);
export default LoginContainer;
