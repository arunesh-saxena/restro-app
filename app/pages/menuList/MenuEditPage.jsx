import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MenuEditContainer from '../../containers/menu/MenuEditContainer';
import appConstants from '../../appConstants/appConstants';
import { getMenuItem, updateMenuItem } from '../../actions/menuAction';

class MenuEditPage extends React.Component {
    componentWillMount() {
        const itemID = this.props.match.params.itemID;
        this.props.getMenuItem(itemID);
    }
    handleMenuEditSubmit(file) {
        const formInfo = this.props.formInfo;
        if (formInfo && !formInfo.syncErrors) {
            const itemId = this.props.menuItem.id;
            const formData = formInfo.values;
            let data = new FormData();
            data.append('itemName', formData.itemName);
            data.append('description', formData.description);
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
                    handleMenuEditSubmit={(file) => { this.handleMenuEditSubmit(file) }} />
            </div>);
    }
};


const mapStateToProps = state => ({
    menuItem: state.menu && state.menu.menuInitialItem || null,
    formInfo: state.form && state.form.menuEditForm,
});
const mapDispatchToProps = dispatch =>
    bindActionCreators({
        getMenuItem,
        updateMenuItem
    }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuEditPage);