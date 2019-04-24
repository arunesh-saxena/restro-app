import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MenuListContainer from '../../containers/menu/MenuListContainer';
import appConstants from '../../appConstants/appConstants';

class MenuListPage extends React.Component {

    render() {
        return (
            <div>
                <MenuListContainer labels={appConstants.labels} menuList={this.props.menuList} />
            </div>);
    }
};


const mapStateToProps = state => ({
    menuList: state.menu && state.menu.menuList || []

});
const mapDispatchToProps = dispatch =>
    bindActionCreators({}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuListPage);