import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';
import MenuForm from '../../components/form/MenuForm';

let MenuEditContainer = (props) => {
    const {
        menuItem,
        handleMenuEditSubmit,
        pristine,
        submitting,
        formInfo
    } = props;

    const { common: labels } = props.labels;

    let fileInput = '';

    const submitForm = (e, fileInput) => {
        e.preventDefault();
        const file = !!fileInput.files.length && fileInput.files[0];
        handleMenuEditSubmit(file);
    };
    const renderHeading = () => {
        return (
            <h1>
                {menuItem && menuItem.itemName}
            </h1>
        );
    };

    return (
        <div className="menu-edit-container">
            <div className="row justify-content-md-center">
                <div className="col-xs-10 col-md-10">
                    {renderHeading()}
                    <MenuForm
                        submitForm={submitForm}
                        labels={labels}
                        fileInput={fileInput}
                        disabled={pristine || submitting || formInfo.syncErrors} />
                </div>
            </div>
        </div>
    )
};

MenuEditContainer = reduxForm({
    form: 'menuEditForm'
})(MenuEditContainer);

const mapStateToProps = state => ({
    initialValues: state.menu && state.menu.menuInitialItem, 
});
const matchDispatchToProps = dispatch => bindActionCreators({}, dispatch);

MenuEditContainer = connect(
    mapStateToProps,
    matchDispatchToProps,
)(MenuEditContainer);

export default MenuEditContainer;