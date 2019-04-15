import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { menuUploadValidate } from '../../utils/formValidation';

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

let MenuUploadContainer = (props) => {
    const {
        handleMenuUploadSubmit,
        pristine,
        submitting,
        formInfo
    } = props;
    const { common: labels } = props.labels;
    let fileInput = '';

    const getLoginHeading = () => {
        return (
            <h1 className="form-heading h2">
                {labels.addMenu}
            </h1>
        );
    };
    const submitForm = (e) => {
        const file = !!fileInput.files.length && fileInput.files[0];
        handleMenuUploadSubmit(e, file)
    };
    const renderMenuUploadForm = () => {
        return (
            <form onSubmit={submitForm}>
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


                <button type="submit" disabled={pristine || submitting || formInfo.syncErrors} className="col btn btn-primary">{labels.submit}</button>
            </form>
        );
    };
    const successMsg = () => {
        const msg = props.menu && props.menu.msg;
        const success  = props.menu && props.menu.success;
        if(!msg && !success){
            return '';
        }
        let className = 'alert';
        if (success && msg && msg.length) {
            className += ' alert-success'
        } else {
            className += ' alert-dark'
        }
        return (
            <p className={className}>{msg}</p>
        );
    }
    return (
        <div className="menu-upload-form-container">
            <div className="row justify-content-md-center">
                <div className="col-xs-12 col-md-6">
                    {getLoginHeading()}
                    {renderMenuUploadForm()}
                    {successMsg()}

                </div>
            </div>
        </div>
    )
};
MenuUploadContainer = reduxForm({
    form: 'menuUpload'
})(MenuUploadContainer);
export default MenuUploadContainer;