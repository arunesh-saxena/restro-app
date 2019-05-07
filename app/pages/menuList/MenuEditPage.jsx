import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import appConstants from '../../appConstants/appConstants';
import { getMenuList } from '../../actions/menuAction';

class MenuEditPage extends React.Component {
    componentDidMount() {

    }
    render() {
        return (
            <div>
                Menu Edit page
            </div>);
    }
};


const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch =>
    bindActionCreators({}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuEditPage);