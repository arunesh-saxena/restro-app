import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import appConstants from '../../appConstants/appConstants';
import RestroEditContainer from '../../containers/restro/RestroEditContainer';
import { getRestro, updateRestro } from '../../actions/restroAction';

class RestroEditPage extends Component {
    componentWillMount() {
        const { restroID } = this.props.match.params;
        this.props.getRestro(restroID);
    }
    updateRestroHandler() {
        const { formInfo } = this.props;
        if (formInfo && !formInfo.syncErrors) {
            const formData = formInfo.values;
            const { username } = this.props.user;
            const restroInitialDetials =
                (this.props.restro && this.props.restro.restroInitialDetials) ||
                null;
            const restroID = restroInitialDetials && restroInitialDetials.id;
            const data = {
                id: restroID,
                restroDetails: {
                    restaurantName: formData.restaurantName,
                    noOfTables: formData.numberOfTables
                }
            };
            this.props.updateRestro(data);
        }
    }
    render() {
        return (
            <div className="restro-add-page">
                <RestroEditContainer
                    labels={appConstants.labels.restro}
                    formInfo={this.props.formInfo}
                    updateRestroHandler={() => {
                        this.updateRestroHandler();
                    }}
                    restro={this.props.restro}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    restro: state.restro || {},
    user: state.user,
    formInfo: state.form && state.form.restroEditForm
});
const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            getRestro,
            updateRestro
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RestroEditPage);
