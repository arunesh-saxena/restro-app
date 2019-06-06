import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MenuEditContainer from '../../containers/menu/MenuEditContainer';
import appConstants from '../../appConstants/appConstants';
import {
    getMenuItem,
    updateMenuItem,
    setMenuUploadAction
} from '../../actions/menuAction';

class MenuEditPage extends React.Component {
    componentWillMount() {
        this.props.setMenuUploadAction({ success: null, msg: null });
        const { itemID } = this.props.match.params;
        this.props.getMenuItem(itemID);
    }

    handleMenuEditSubmit(file) {
        const { formInfo } = this.props;
        if (formInfo && !formInfo.syncErrors) {
            const itemId = this.props.match.params.itemID;
            const formData = formInfo.values;
            const data = new FormData();
            data.append('itemName', formData.itemName);
            data.append('description', formData.description);
            data.append('quantity', formData.quantity);
            data.append('price', formData.price);
            data.append('unit', formData.unit);
            data.append('currency', formData.currency);
            data.append('imageURL', file);
            data.append('itemId', itemId);

            this.props.updateMenuItem(data);
        }
    }

    render() {
        return (
            <div>
                <MenuEditContainer
                    labels={appConstants.labels}
                    formInfo={this.props.formInfo}
                    handleMenuEditSubmit={(file) => {
                        this.handleMenuEditSubmit(file);
                    }}
                    menu={this.props.menu}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    menu: (state.menu && state.menu) || null,
    formInfo: state.form && state.form.menuEditForm
});
const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            getMenuItem,
            updateMenuItem,
            setMenuUploadAction
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuEditPage);
