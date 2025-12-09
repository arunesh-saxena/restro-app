import React from 'react';
import { reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import Heading from '../../components/heading/Heading';
import ServerMsg from '../../components/serverMsg/ServerMsg';
import RestroForm from '../../components/form/RestroForm';
import appConstants from '../../appConstants/appConstants';

let AddRestroContainer = (props) => {
    const {
        labels,
        pristine,
        submitting,
        formInfo,
        addRestroHandler,
        restro
    } = props;
    const renderHeading = () => <Heading text={labels.addRestro} />;

    return (
        <div className="restro-add-container">
            {renderHeading()}
            <ServerMsg />
            <div className="row justify-content-md-center">
                <div className="col-xs-12 col-md-6">
                    <RestroForm
                        submitForm={addRestroHandler}
                        labels={labels}
                        disabled={pristine || submitting || formInfo.syncErrors}
                    />
                </div>
            </div>
        </div>
    );
};

AddRestroContainer = reduxForm({
    form: appConstants.form.addRestro
})(AddRestroContainer);

AddRestroContainer.propTypes = {
    labels: PropTypes.shape({}),
    addRestroHandler: PropTypes.func
};

export default AddRestroContainer;
