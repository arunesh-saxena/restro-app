import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setLanguage } from '../actions/appAction';

class HomePage extends React.Component {
    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <h1>HomePage Consumer App</h1>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    app: state.app
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            setLanguage
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);
