import React from 'react';
import { Field, reduxForm } from 'redux-form';


const renderField = ({
    input,
    id,
    placeholder,
    type,
    className,
    meta: { touched, error, warning }
}) => (
        <div>
            <input {...input} id={id} placeholder={placeholder} type={type} className={className} autoComplete="on" />
            {touched &&
                ((error && <span className="error-message">{error}</span>) ||
                    (warning && <span>{warning}</span>))}
        </div>
    );

let MenuForm = (props) => {
    const {
        submitForm,
        labels,
        disabled
    } = props;

    let fileInput = '';

    const submitHandler = (e) =>{
        e.preventDefault();
        submitForm(fileInput);
    }
    return (
        <div className="menu-form">
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="itemName">{labels.itemName}<sup>*</sup></label>
                    <Field name="itemName" type="text" component={renderField} className="form-control" id="itemName" placeholder={labels.enterItemName} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">{labels.description}<sup>*</sup></label>
                    <Field name="description" type="text" component={renderField} className="form-control" id="description" placeholder={labels.description} />
                </div>
                <div className="form-group">
                    <label htmlFor="image">{labels.image}<sup>*</sup></label>
                    {/* <Field name="image" type="file" component={uploadFile} className="form-control" id="image" placeholder={labels.image}  /> */}
                    <input
                        type="file"
                        name="image"
                        id="image"
                        className="form-control"
                        placeholder={labels.image}
                        ref={(file) => { fileInput = file; }}
                    >
                    </input>
                </div>
                <div className="form-group">
                    <label htmlFor="price">{labels.price}<sup>*</sup></label>
                    <Field name="price" type="text" component={renderField} className="form-control" id="price" placeholder={labels.price} />
                </div>
                <div className="form-group">
                    <label htmlFor="unit">{labels.unit}<sup>*</sup></label>
                    <Field name="unit" type="text" component={renderField} className="form-control" id="unit" placeholder={labels.unit} />
                </div>
                <div className="form-group">
                    <label htmlFor="currency">{labels.currency}<sup>*</sup></label>
                    <Field name="currency" type="text" component={renderField} className="form-control" id="currency" placeholder={labels.currency} />
                </div>
                
                <button type="submit" disabled={disabled} className="col btn btn-primary">{labels.submit}</button>
            </form>
        </div>
    )
};

export default MenuForm;