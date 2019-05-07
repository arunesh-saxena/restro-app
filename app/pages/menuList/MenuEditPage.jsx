import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { getMenuItem } from '../../actions/menuAction';

class MenuEditPage extends React.Component {
    componentDidMount() {
        const itemID = this.props.match.params.itemID;
        this.props.getMenuItem(itemID);
    }
    render() {
        const itemID = this.props.match.params.itemID;
        return (
            <div>
                Menu Edit page `{itemID}`
            </div>);
    }
};


const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch =>
    bindActionCreators({getMenuItem}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuEditPage);