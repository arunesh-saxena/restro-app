import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MenuEditContainer from '../../containers/menu/MenuEditContainer';
import appConstants from '../../appConstants/appConstants';
import { getMenuItem } from '../../actions/menuAction';

class MenuEditPage extends React.Component {
    componentWillMount() {
        const itemID = this.props.match.params.itemID;
        this.props.getMenuItem(itemID);
    }
    render() {
        return (
            <div>
                <MenuEditContainer labels={appConstants.labels} menuItem={this.props.menuItem} formInfo={this.props.formInfo} />
            </div>);
    }
};


const mapStateToProps = state => ({
    menuItem: state.menu && state.menu.menuItem || null,
    formInfo: state.form && state.form.menuEditForm,
});
const mapDispatchToProps = dispatch =>
    bindActionCreators({ getMenuItem }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuEditPage);