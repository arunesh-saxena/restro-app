import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import appConstants from '../../appConstants/appConstants';
import { getRestroList } from '../../actions/restroAction';
import RestroListContainer from '../../containers/restro/RestroListContainer';

class RestroListPage extends Component {
    componentDidMount() {
        this.props.getRestroList();
    }
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
)(RestroListPage);
