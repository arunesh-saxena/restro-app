import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MenuListContainer from '../../containers/menu/MenuListContainer';
import appConstants from '../../appConstants/appConstants';
import { getMenuList } from '../../actions/menuAction';

class MenuListPage extends React.Component {
    componentDidMount() {
        this.props.getMenuList();
    }
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
    bindActionCreators({ getMenuList }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuListPage);