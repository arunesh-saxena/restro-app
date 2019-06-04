import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { loginValidate } from '../../utils/formValidation';
import Heading from '../../components/heading/Heading';

const renderField = ({
  input,
  id,
  placeholder,
  type,
  className,
  meta: { touched, error, warning },
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

let LoginContainer = props => {
  const { handleSignInSubmit, pristine, submitting, formInfo } = props;
  const { common: labels } = props.labels;

  let renderHeading = () => <Heading text={labels.login} />;

  let renderLoginForm = () => {
    return (
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
  };
  const successMsg = () => {
    const { loginData } = props;

    if (!Object.keys(loginData).length || !loginData.errorMsg) {
      return '';
    }
    let msg = '';
    let className = 'alert';
    if (loginData && loginData.username) {
      className += ' alert-success';
      msg = 'Thank you for login';
    } else {
      className += ' alert-dark';
      msg = `${loginData.errorMsg}`;
    }
    return <p className={className}>{msg}</p>;
  };
  return (
    <div className="login-form-container">
      <div className="row justify-content-md-center">
        <div className="col-xs-12 col-md-6">
          {renderHeading()}
          {renderLoginForm()}
          {successMsg()}
        </div>
      </div>
    </div>
  );
};

LoginContainer = reduxForm({
  form: 'loginForm',
  validate: loginValidate,
})(LoginContainer);
export default LoginContainer;
