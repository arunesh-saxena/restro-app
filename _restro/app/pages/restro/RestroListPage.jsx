import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import appConstants from '../../appConstants/appConstants';
import RestroListContainer from '../../containers/restro/RestroListContainer';

class RestroListPage extends Component {
    render() {
        return (
            <div className="restro-add-page">
                <RestroListContainer
                    labels={appConstants.labels.restro}
                    restroList={this.props.restro.restroList}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    restro: state.restro || {}
});
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RestroListPage);
