import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MenuUploadContainer from '../../containers/menu/MenuUploadContainer';
import appConstants from '../../appConstants/appConstants';
import { uploadMenuAction } from '../../actions/menuAction';
import { getUserResautants } from '../../actions/myAccountAction';

class MenuUploadPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleMenuUploadSubmit = this.handleMenuUploadSubmit.bind(this);
    }

    componentWillMount() {
        const { username } = this.props.user;
        this.props.getUserResautants(username);
    }

    handleMenuUploadSubmit(file) {
        const { formInfo } = this.props;
        if (formInfo && !formInfo.syncErrors) {
            const formData = formInfo.values;
            const data = new FormData();
            data.append('itemName', formData.itemName);
            data.append('description', formData.description);
            data.append('quantity', formData.quantity);
            data.append('price', formData.price);
            data.append('unit', formData.unit);
            data.append('currency', formData.currency);
            data.append('imageURL', file);
            data.append('restaurantCode', formData.restroCode);

            this.props.uploadMenuAction(data);
        }
    }

    render() {
        return (
            <div>
                <MenuUploadContainer
                    handleMenuUploadSubmit={this.handleMenuUploadSubmit}
                    formInfo={this.props.formInfo}
                    labels={appConstants.labels}
                    menu={this.props.menu}
                    userRestaurants={this.props.myAccount.restaurants}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    formInfo: state.form && state.form.menuUpload,
    menu: state.menu.menuUpload,
    user: state.user,
    myAccount: state.myAccount
});
const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            uploadMenuAction,
            getUserResautants
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuUploadPage);
