import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import commonUtil from '../../utils/commonUtils';
import { subscribeToMsg, unSubscribeToMsg, emitMsg } from '../../utils/socket';
import appConstants from '../../appConstants/appConstants';
import { getRestroList } from '../../actions/restroAction';
import InfoMessage from '../../components/infoMessage/InfoMessage';
import OrderViewListContainer from '../../containers/order/OrderViewListContainer';

class ordersViewListPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            restroCode: null
        };
    }
    componentWillMount() {
        const { restroCode } = commonUtil.parseQueryString(
            this.props.location.search
        );
        console.log(restroCode);
        this.setState({
            restroCode
        });
        // subscribeToMsg((err, data) => {
        //     console.log(data);
        // });
    }
    componentWillUnmount() {
        // unSubscribeToMsg();
    }
    render() {
        const { restroCode } = this.state;
        const restroSelectError = 'Please select the restaurant';
        return (
            <div className="orders-view-list-page">
                {restroCode && <OrderViewListContainer />}
                {!restroCode && (
                    <InfoMessage
                        message={restroSelectError}
                        infoClass="alert-warning"
                    />
                )}
            </div>
        );
    }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            getRestroList
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ordersViewListPage);
