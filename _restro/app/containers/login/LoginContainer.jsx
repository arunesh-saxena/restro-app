import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { loginValidate } from '../../utils/formValidation';
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

let LoginContainer = (props) => {
    const { handleSignInSubmit, pristine, submitting, formInfo } = props;
    const { common: labels } = props.labels;

    const renderHeading = () => <Heading text={labels.login} />;

    const renderLoginForm = () => (
        <form onSubmit={handleSignInSubmit}>
            <div className="form-group">
                <label htmlFor="username">
                    {labels.username}
                    <sup>*</sup>
                </label>
                {/* <input type="text" className="form-control" id="username" placeholder="username" /> */}
                <Field
                    name="username"
                    type="text"
                    component={renderField}
                    className="form-control"
                    id="username"
                    placeholder={labels.enterUsername}
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">
                    {labels.password}
                    <sup>*</sup>
                </label>
                <Field
                    name="password"
                    type="password"
                    component={renderField}
                    className="form-control"
                    id="password"
                    placeholder={labels.password}
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

    return (
        <div className="login-form-container">
            <div className="row justify-content-md-center">
                <div className="col-xs-12 col-md-6">
                    {renderHeading()}
                    <ServerMsg />
                    {renderLoginForm()}
                </div>
            </div>
        </div>
    );
};

LoginContainer = reduxForm({
    form: 'loginForm',
    validate: loginValidate
})(LoginContainer);
export default LoginContainer;
