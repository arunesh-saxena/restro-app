import React from 'react';
import PropTypes from 'prop-types';

import FormField from './FormField/FormField';
import { required, maxLength15, number } from '../../utils/formValidation';

const RestroForm = (props) => {
    const { submitForm, labels, disabled } = props;

    const submitHandler = (e) => {
        e.preventDefault();
        submitForm();
    };

    const formField = [
        {
            label: labels.restaurantName,
            id: 'restaurantName',
            fieldName: 'restaurantName',
            placeholder: labels.restaurantName,
            type: 'text',
            className: '',
            isRequired: true,
            validate: [required, maxLength15]
        },
        {
            label: labels.noOfTables,
            id: 'noOfTables',
            fieldName: 'noOfTables',
            placeholder: labels.noOfTables,
            type: 'text',
            className: '',
            isRequired: true,
            validate: [required, number]
        }
    ];

    const renderFormFields = () => {
        const formFields = formField.map((file, key) => (
            <div className="form-group" key={key}>
                <FormField {...file} />
            </div>
        ));
        return formFields;
    };

    return (
        <div className="restro-form">
            <form onSubmit={submitHandler}>
                {renderFormFields()}
                <button
                    type="submit"
                    disabled={disabled}
                    className="col btn btn-primary"
                >
                    {labels.submit}
                </button>
            </form>
        </div>
    );
};

RestroForm.propTypes = {
    labels: PropTypes.shape({}),
    submitForm: PropTypes.func
};

export default RestroForm;
