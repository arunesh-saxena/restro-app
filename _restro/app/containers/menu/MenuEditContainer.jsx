import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';
import MenuForm from '../../components/form/MenuForm';
import appConstants from '../../appConstants/appConstants';
import Heading from '../../components/heading/Heading';
import ServerErrors from '../../components/serverErrors/ServerErrors';

let MenuEditContainer = (props) => {
    const {
        menu,
        handleMenuEditSubmit,
        pristine,
        submitting,
        formInfo
    } = props;

    const { common: labels } = props.labels;

    const fileInput = '';

    const submitForm = (fileInput) => {
        const file = !!fileInput.files.length && fileInput.files[0];
        handleMenuEditSubmit(file);
    };
    const renderHeading = () => {
        const text =
            props && props.initialValues && props.initialValues.itemName;
        return <Heading text={text} />;
    };

    const successMsg = () => {
        const menuUpload = (menu && menu.menuUpload && menu.menuUpload) || {};
        const { msg, success } = menuUpload;

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
        <div className="menu-edit-container">
            <div className="row justify-content-md-center">
                <div className="col-xs-10 col-md-10">
                    {renderHeading()}
                    <ServerErrors />
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

MenuEditContainer = reduxForm({
    form: appConstants.form.menuEditForm
})(MenuEditContainer);

const mapStateToProps = state => ({
    initialValues: state.menu && state.menu.menuInitialItem,
    enableReinitialize: true
});
const matchDispatchToProps = dispatch => bindActionCreators({}, dispatch);

MenuEditContainer = connect(
    mapStateToProps,
    matchDispatchToProps
)(MenuEditContainer);

export default MenuEditContainer;
