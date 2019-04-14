import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MenuUploadContainer from '../../containers/menu/MenuUploadContainer';
import appConstants from '../../appConstants/appConstants';
import { uploadMenuAction } from '../../actions/menuAction';
class MenuUploadPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleMenuUploadSubmit = this.handleMenuUploadSubmit.bind(this);
    }
    handleMenuUploadSubmit(e, file) {
        e.preventDefault();
        const formInfo = this.props.formInfo;
        if (formInfo && !formInfo.syncErrors) {
            const formData = formInfo.values;
            /* let menu = {
                itemName: formData.itemName,
                description: formData.description,
                price: formData.price,
                unit: formData.unit,
                currency: formData.currency,
                imageURL: file
            } */
            let data = new FormData();
            data.append('itemName', formData.itemName);
            data.append('description', formData.description);
            data.append('price', formData.price);
            data.append('unit', formData.unit);
            data.append('currency', formData.currency);
            data.append('imageURL', file);

            this.props.uploadMenuAction(data);
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
        uploadMenuAction
    }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuUploadPage);