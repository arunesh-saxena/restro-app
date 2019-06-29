import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import appConstants from '../../appConstants/appConstants';
import AddRestroContainer from '../../containers/restro/AddRestoContainer';
import { addRestro } from '../../actions/restroAction';

class AddRestroPage extends Component {
    addRestroHandler() {
        const { formInfo } = this.props;
        if (formInfo && !formInfo.syncErrors) {
            const formData = formInfo.values;
            const { username } = this.props.user;
            const data = {
                restaurantName: formData.restaurantName,
                noOfTables: formData.noOfTables,
                userName: username
            };
            this.props.addRestro(data);
        }
    }
    render() {
        return (
            <div className="restro-add-page">
                <AddRestroContainer
                    labels={appConstants.labels.restro}
                    formInfo={this.props.formInfo}
                    addRestroHandler={() => {
                        this.addRestroHandler();
                    }}
                    restro={this.props.restro}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    formInfo: state.form && state.form.addRestro,
    user: state.user,
    restro: state.restro || {}
});
const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            addRestro
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddRestroPage);
