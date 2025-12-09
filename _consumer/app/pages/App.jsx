import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AppContainer from '../containers/AppContainer';
import appConstants from '../appConstants/appConstants';
import AppContext from '../components/context/AppContext';

class App extends React.Component {
    render() {
        const cart = this.props.cart;
        const props = Object.assign({}, this.props, {
            labels: appConstants.labels,
            handleLogout: this.handleLogout
        });

        return (
            <div className="app-page">
                <AppContext.Provider value={cart}>
                    <AppContainer {...props} />
                </AppContext.Provider>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    cart: state.cart
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
