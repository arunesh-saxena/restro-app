import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { signUpValidate as formValidate } from '../../utils/formValidation';
import Heading from '../../components/heading/Heading';
import ServerMsg from '../../components/serverMsg/ServerMsg';

const renderField = ({
    input,
    id,
    placeholder,
    type,
    className,
    meta: { touched, error, warning }
}) => (
    <div>
        <input
            {...input}
            id={id}
            placeholder={placeholder}
            type={type}
            className={className}
            autoComplete="off"
        />
        {touched &&
            ((error && <span className="error-message">{error}</span>) ||
                (warning && <span>{warning}</span>))}
    </div>
);

let SignUpContainer = (props) => {
    const { handleSignUpSubmit, pristine, submitting, formInfo } = props;
    const { common: labels, signUp: labelsSignUp } = props.labels;

    const redemderHeading = () => <Heading text={labels.signUp} />;

    const renderLoginForm = () => {
        const { userData } = props;
        if (
            !Object.keys(userData).length ||
            (userData && userData.user && !userData.user.success)
        ) {
            return (
                <form onSubmit={handleSignUpSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">
                            {labels.username}
                            <sup>*</sup>
                        </label>
                        <Field
                            name="username"
                            type="text"
                            component={renderField}
                            className="form-control"
                            id="username"
                            placeholder={labels.enterUserName}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">
                            {labels.emailAddress}
                            <sup>*</sup>
                        </label>
                        <Field
                            component={renderField}
                            name="email"
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder={labels.enterEmail}
                        />
                        <small id="emailHelp" className="form-text text-muted">
                            {labelsSignUp.emailConfidentialMsg}
                        </small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="userPassword">
                            {labels.password}
                            <sup>*</sup>
                        </label>
                        <Field
                            component={renderField}
                            name="userPassword"
                            type="password"
                            className="form-control"
                            id="userPassword"
                            placeholder={labels.password}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">
                            {labels.confirmPassword}
                            <sup>*</sup>
                        </label>
                        <Field
                            component={renderField}
                            name="confirmPassword"
                            type="password"
                            className="form-control"
                            id="confirmPassword"
                            placeholder={labels.confirmPassword}
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={pristine || submitting || formInfo.syncErrors}
                        className="col btn btn-primary"
                    >
                        {labels.submit}
                    </button>
                </form>
            );
            // return '';
        }
    };

    return (
        <div className="sign-form-container">
            <div className="row justify-content-md-center">
                <div className="col-xs-12 col-md-6">
                    {redemderHeading()}
                    <ServerMsg />
                    {renderLoginForm()}
                </div>
            </div>
        </div>
    );
};
SignUpContainer = reduxForm({
    form: 'signUp',
    validate: formValidate // <--- validation function given to redux-form
})(SignUpContainer);
export default SignUpContainer;
