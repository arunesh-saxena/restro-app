import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';

const renderHeading = (labels) => {
    return (
        <h1>
            {labels}
        </h1>
    );
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
            <input {...input} id={id} placeholder={placeholder} type={type} className={className} autoComplete="on" />
            {touched &&
                ((error && <span className="error-message">{error}</span>) ||
                    (warning && <span>{warning}</span>))}
        </div>
    );

const submitForm = (e) => {
    e.preventDefault();
    console.log('submit')
};
const renderMenuUploadForm = (labels, props) => {
    const {
        pristine,
        submitting,
        formInfo,
    } = props;
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
                    ref={(file) => { }}
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

let MenuEditContainer = (props) => {
    const {
        menuItem,
    } = props;
    const { common: labels } = props.labels;

    return (
        <div className="menu-edit-container">
            <div className="row justify-content-md-center">
                <div className="col-xs-12 col-md-12">
                    {renderHeading(menuItem && menuItem.itemName)}
                    {renderMenuUploadForm(labels, props)}
                </div>
            </div>
        </div>
    )
};

MenuEditContainer = reduxForm({
    form: 'menuEditForm'
})(MenuEditContainer);

// You have to connect() to any reducers that you wish to connect to yourself

const mapStateToProps = state => ({
    initialValues: state.menu && state.menu.menuItem, // pull initial values from account reducer
});
const matchDispatchToProps = dispatch => bindActionCreators({}, dispatch);

MenuEditContainer = connect(
    mapStateToProps,
    matchDispatchToProps, // bind account loading action creator
)(MenuEditContainer);

export default MenuEditContainer;