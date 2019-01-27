import React from 'react';
import { Field, reduxForm } from 'redux-form';

const validate = values => {
    const errors = {};
    if (!values.username) {
        errors.username = 'Required'
    } else if (values.username.length > 15) {
        errors.username = 'Must be 15 characters or less'
    }
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (!values.userPassword) {
        errors.userPassword = 'Required'
    }

    if (!values.confirmPassword) {
        errors.confirmPassword = 'Required'
    } else if (values.confirmPassword !== values.userPassword) {
        errors.confirmPassword = 'Mismatch with password'
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

let SignUpContainer = (props) => {
    const {
        handleSignUpSubmit,
        pristine,
        submitting,
        formInfo
    } = props;

    let getLoginHeading = () => {
        return (
            <h1 className="form-heading h2">
                Sign Up
            </h1>
        );
    };

    let renderLoginForm = () => {
        const userData = props.userData;
        if (!Object.keys(userData).length || userData && userData.user && !userData.user.success) {
            return (
                <form onSubmit={handleSignUpSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username<sup>*</sup></label>
                        <Field name="username" type="text" component={renderField} className="form-control" id="username" placeholder="Enter username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email address<sup>*</sup></label>
                        <Field component={renderField} name="email" type="email" className="form-control" id="email" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="userPassword">Password<sup>*</sup></label>
                        <Field component={renderField} name="userPassword" type="password" className="form-control" id="userPassword" placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm password<sup>*</sup></label>
                        <Field component={renderField} name="confirmPassword" type="password" className="form-control" id="confirmPassword" placeholder="Confirm password" />
                    </div>
                    <button type="submit" disabled={pristine || submitting || formInfo.syncErrors} className="col btn btn-primary">Submit</button>
                </form>
            );
            return '';
        }
    };
    const successMsg = () => {
        const userData = props.userData;

        if(!Object.keys(userData).length){
            return '';
        }
        let msg = '';
        let className = 'alert';
        if (userData && userData.user && userData.user.success) {
            className+=' alert-success'
            msg = 'Thank you for signUp';
        }else if(userData && userData.user && userData.user.success === false) {
            className+=' alert-dark'
            msg = userData.user.data && userData.user.data.message;
        }
        return (
            <p className={className}>{msg}</p>
        );
    }
    return (
        <div className="sign-form-container">
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
SignUpContainer = reduxForm({
    form: 'signUp',
    validate, // <--- validation function given to redux-form
})(SignUpContainer);
export default SignUpContainer;