import React from 'react';
import FormField from './FormField/FormField';
import { required, maxLength15 } from '../../utils/formValidation';

const MenuForm = (props) => {
    const {
        submitForm,
        labels,
        disabled,
        restaurants = [],
        defaultRestro = ''
    } = props;

    let fileInput = '';

    const submitHandler = (e) => {
        e.preventDefault();
        submitForm(fileInput);
    };

    const formField = [
        {
            label: labels.selectRestaurant,
            id: 'restroCode',
            fieldName: 'restroCode',
            placeholder: 'labels.currency',
            type: 'select',
            className: '',
            isRequired: true,
            validate: [required],
            options: (function() {
                const options = [];
                restaurants.forEach((v) => {
                    options.push({
                        label: v.restaurantName,
                        value: v.restaurantCode
                    });
                });
                return options;
            })(),
            defaultValue: defaultRestro
        },
        {
            label: labels.itemName,
            id: 'itemName',
            fieldName: 'itemName',
            placeholder: labels.enterItemName,
            type: 'text',
            className: '',
            isRequired: true,
            validate: [required, maxLength15]
        },
        {
            label: labels.quantity,
            id: 'quantity',
            fieldName: 'quantity',
            placeholder: labels.quantity,
            type: 'text',
            className: '',
            isRequired: true,
            validate: [required, maxLength15]
        },
        {
            label: labels.description,
            id: 'description',
            fieldName: 'description',
            placeholder: labels.description,
            type: 'text',
            className: '',
            isRequired: true,
            validate: [required]
        },
        {
            label: labels.price,
            id: 'price',
            fieldName: 'price',
            placeholder: labels.price,
            type: 'text',
            className: '',
            isRequired: true,
            validate: [required]
        },
        {
            label: labels.unit,
            id: 'unit',
            fieldName: 'unit',
            placeholder: labels.unit,
            type: 'text',
            className: '',
            isRequired: true,
            validate: [required]
        },
        {
            label: labels.currency,
            id: 'currency',
            fieldName: 'currency',
            placeholder: labels.currency,
            type: 'text',
            className: '',
            isRequired: true,
            validate: [required]
        }
    ];

    const renderFormFields = () => {
        const formFields = formField.map((field, key) => (
            <div className="form-group" key={key}>
                <FormField {...field} />
            </div>
        ));
        return formFields;
    };

    return (
        <div className="menu-form">
            <form onSubmit={submitHandler}>
                {renderFormFields()}
                <div className="form-group">
                    <label htmlFor="image">
                        {labels.image}
                        <sup>*</sup>
                    </label>
                    {/* <Field name="image" type="file" component={uploadFile} className="form-control" id="image" placeholder={labels.image}  /> */}
                    <input
                        type="file"
                        name="image"
                        id="image"
                        className="form-control"
                        placeholder={labels.image}
                        ref={(file) => {
                            fileInput = file;
                        }}
                    />
                </div>
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

export default MenuForm;
