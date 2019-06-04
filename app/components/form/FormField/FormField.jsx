import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

const renderField = ({
    input,
    id,
    placeholder,
    type,
    className,
    meta: { touched, error, warning },
}) => {
    return (
        <div>
            <input
                {...input}
                id={id}
                placeholder={placeholder}
                type={type}
                className={className}
                autoComplete="on"
            />
            {touched &&
                ((error && <span className="error-message">{error}</span>) ||
                    (warning && <span>{warning}</span>))}
        </div>
    );
};

const FormField = ({
    label,
    id,
    fieldName,
    placeholder,
    type,
    className,
    isRequired,
    validate = [],
}) => (
    <div>
        <label htmlFor={id}>
            {label} {isRequired && <sup>*</sup>}{' '}
        </label>
        <Field
            name={fieldName}
            type={type}
            component={renderField}
            className={`form-control ${className}`}
            id={fieldName}
            validate={validate}
            placeholder={placeholder}
        />
    </div>
);

FormField.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    className: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
};
export default FormField;
