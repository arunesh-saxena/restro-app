import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import appConstants from '../../appConstants/appConstants';

class ordersViewListPage extends React.Component {
    render() {
        return (
            <div className="orders-view-list-page">orders-view-list-page</div>
        );
    }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ordersViewListPage);
