import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import appConstants from '../../appConstants/appConstants';
import AddRestroContainer from '../../containers/restro/AddRestoContainer';

class AddRestroPage extends Component {
    render() {
        return (
            <div className="restro-add-page">
                <AddRestroContainer labels={appConstants.labels.restro} />
            </div>
        );
    }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddRestroPage);
