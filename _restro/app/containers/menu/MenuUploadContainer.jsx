import React from 'react';
import { reduxForm } from 'redux-form';
import MenuForm from '../../components/form/MenuForm';
import appConstants from '../../appConstants/appConstants';
import Heading from '../../components/heading/Heading';
import ServerMsg from '../../components/serverMsg/ServerMsg';

let MenuUploadContainer = (props) => {
    const { handleMenuUploadSubmit, pristine, submitting, formInfo } = props;
    const { common: labels } = props.labels;
    const fileInput = '';

    const renderHeading = () => <Heading text={labels.addMenu} />;

    const submitForm = (fileInput) => {
        const file = !!fileInput.files.length && fileInput.files[0];
        handleMenuUploadSubmit(file);
    };

    return (
        <div className="menu-upload-form-container">
            <div className="row justify-content-md-center">
                <div className="col-xs-12 col-md-6">
                    {renderHeading()}
                    <ServerMsg />
                    <MenuForm
                        submitForm={submitForm}
                        labels={labels}
                        fileInput={fileInput}
                        disabled={pristine || submitting || formInfo.syncErrors}
                        restaurants={props.userRestaurants}
                    />
                </div>
            </div>
        </div>
    );
};

MenuUploadContainer = reduxForm({
    form: appConstants.form.menuUpload
})(MenuUploadContainer);

export default MenuUploadContainer;
