import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MenuUploadContainer from '../../containers/menu/MenuUploadContainer';
import appConstants from '../../appConstants/appConstants';
class MenuUploadPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleMenuUploadSubmit = this.handleMenuUploadSubmit.bind(this);
    }
    handleMenuUploadSubmit(e, file) {
        e.preventDefault();
        const formInfo = this.props.formInfo;
        console.log(formInfo);
        if (formInfo && !formInfo.syncErrors) {
            const formData = formInfo.values;
            // this.props.submitLogin(formData, this.props);
        }
    }
    render() {
        return (
            <div>
                <MenuUploadContainer handleMenuUploadSubmit={this.handleMenuUploadSubmit} formInfo={this.props.formInfo} labels={appConstants.labels} />
            </div>
        );
    }
};


const mapStateToProps = state => ({
    formInfo: state.form && state.form.menuUpload

});
const mapDispatchToProps = dispatch =>
    bindActionCreators({

    }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuUploadPage);