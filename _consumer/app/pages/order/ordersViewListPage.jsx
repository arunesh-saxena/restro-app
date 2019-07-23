import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { subscribeToMsg, unSubscribeToMsg, emitMsg } from '../../utils/socket';
import appConstants from '../../appConstants/appConstants';

class ordersViewListPage extends React.Component {
    componentWillMount() {
        subscribeToMsg((err, data) => {
            console.log(data);
        });
    }
    componentWillUnmount() {
        unSubscribeToMsg();
    }
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
