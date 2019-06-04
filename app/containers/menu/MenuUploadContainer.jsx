import React from 'react';
import { reduxForm } from 'redux-form';
import MenuForm from '../../components/form/MenuForm';
import appConstants from '../../appConstants/appConstants';
import Heading from '../../components/heading/Heading';

let MenuUploadContainer = props => {
  const { handleMenuUploadSubmit, pristine, submitting, formInfo } = props;
  const { common: labels } = props.labels;
  let fileInput = '';

  const renderHeading = () => <Heading text={labels.addMenu} />;

  const submitForm = fileInput => {
    const file = !!fileInput.files.length && fileInput.files[0];
    handleMenuUploadSubmit(file);
  };

  const successMsg = () => {
    const msg = props.menu && props.menu.msg;
    const success = props.menu && props.menu.success;
    if (!msg && !success) {
      return '';
    }
    let className = 'alert';
    if (success && msg && msg.length) {
      className += ' alert-success';
    } else {
      className += ' alert-dark';
    }
    return <p className={className}>{msg}</p>;
  };
  return (
    <div className="menu-upload-form-container">
      <div className="row justify-content-md-center">
        <div className="col-xs-12 col-md-6">
          {renderHeading()}
          <MenuForm
            submitForm={submitForm}
            labels={labels}
            fileInput={fileInput}
            disabled={pristine || submitting || formInfo.syncErrors}
          />
          {successMsg()}
        </div>
      </div>
    </div>
  );
};
MenuUploadContainer = reduxForm({
  form: appConstants.form.menuUpload,
})(MenuUploadContainer);
export default MenuUploadContainer;
