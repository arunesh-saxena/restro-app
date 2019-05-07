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
        const itemID = this.props.match.params.itemID;
        return (
            <div>
                <MenuEditContainer labels={appConstants.labels} menuItem={this.props.menuItem} />
            </div>);
    }
};


const mapStateToProps = state => ({
    menuItem: state.menu && state.menu.menuItem || null
});
const mapDispatchToProps = dispatch =>
    bindActionCreators({ getMenuItem }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuEditPage);