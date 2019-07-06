import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

const renderField = ({
    input,
    id,
    placeholder,
    type,
    className,
    options,
    label,
    meta: { touched, error, warning },
    defaultValue
}) => {
    if (type == 'select') {
        return renderSelect({
            input,
            id,
            label,
            className,
            options,
            meta: { touched, error, warning },
            defaultValue
        });
    }
    /* (type === 'text') */
    return renderText({
        input,
        id,
        placeholder,
        type,
        className,
        meta: { touched, error, warning }
    });
};

const renderText = ({
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
            autoComplete="on"
        />
        {touched &&
            ((error && <span className="error-message">{error}</span>) ||
                (warning && <span>{warning}</span>))}
    </div>
);

const renderSelect = ({
    input,
    id,
    label,
    options,
    className,
    meta: { touched, error, warning },
    defaultValue
}) => {
    const [selectedVal, setSelectedVal] = useState(defaultValue);
    // const [isuseEffect, setisuseEffect] = useState(true);
    useEffect(() => {
        /* this will run only once first time cleanUping */
        setSelectedVal('');
    }, []);
    useEffect(() => {
        /* this will run only when default value change */
        setSelectedVal(defaultValue);
    }, [defaultValue]);
    if (!options) {
        options = [];
    }
    const opts = [];
    options.forEach((v, i) => {
        opts.push(
            <option key={i} value={v.value}>
                {v.label}
            </option>
        );
    });

    return (
        <div>
            <select
                {...input}
                id={id}
                className={className}
                autoComplete="on"
                value={selectedVal}
                onChange={(e) => {
                    // setisuseEffect(false);
                    setSelectedVal(e.target.value);
                }}
            >
                <option value="">{label}</option>
                {opts}
            </select>
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
    options = [],
    validate = [],
    defaultValue = ''
}) => (
    <div>
        <label htmlFor={id}>
            {label}
            {isRequired && <sup>*</sup>}
        </label>
        <Field
            name={fieldName}
            type={type}
            component={renderField}
            className={`form-control ${className}`}
            id={fieldName}
            validate={validate}
            placeholder={placeholder}
            options={options}
            label={label}
            defaultValue={defaultValue}
        />
    </div>
);

FormField.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    className: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string
};
export default FormField;
