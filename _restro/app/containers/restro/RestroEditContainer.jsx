import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';

import appConstants from '../../appConstants/appConstants';
import RestroForm from '../../components/form/RestroForm';
import Heading from '../../components/heading/Heading';
import ServerErrors from '../../components/serverErrors/ServerErrors';
import InfoMessage from '../../components/infoMessage/InfoMessage';

let RestroEditContainer = (props) => {
    const {
        labels,
        updateRestroHandler,
        pristine,
        submitting,
        formInfo,
        restro
    } = props;

    const renderHeading = () => {
        const text =
            props && props.initialValues && props.initialValues.restaurantName;
        return <Heading text={text} />;
    };

    return (
        <div className="restro-edit-container">
            {renderHeading()}
            <ServerErrors />
            <InfoMessage infoType={restro.infoType} message={restro.msg} />
            <RestroForm
                submitForm={updateRestroHandler}
                labels={labels}
                disabled={pristine || submitting || formInfo.syncErrors}
            />
        </div>
    );
};

RestroEditContainer = reduxForm({
    form: appConstants.form.restroEditForm
})(RestroEditContainer);

const mapStateToProps = (state) => {
    const restroInitialDetials =
        (state.restro && state.restro.restroInitialDetials) || {};
    const initialValues = {
        restaurantName: restroInitialDetials.restaurantName || '',
        numberOfTables: restroInitialDetials.noOfTables || ''
    };
    return {
        initialValues,
        enableReinitialize: true
    };
};

const matchDispatchToProps = dispatch => bindActionCreators({}, dispatch);

RestroEditContainer = connect(
    mapStateToProps,
    matchDispatchToProps
)(RestroEditContainer);

RestroEditContainer.protoType = {
    labels: PropTypes.shape({}),
    updateRestroHandler: PropTypes.func
};

export default RestroEditContainer;
