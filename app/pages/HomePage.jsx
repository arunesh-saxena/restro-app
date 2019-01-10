import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setLanguage } from '../actions/appAction';

class HomePage extends React.Component {
    constructor(props) {
        super();
        this.onClick = this.onClick.bind(this);
    }
    onClick() {
        console.log('on click');
        console.log(this.props.app);
        this.props.setLanguage('en');

    }
    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <button onClick={this.onClick}>On click</button>
                <h1>HomePage</h1>
            </div>);
    }
};

const mapStateToProps = state => ({
    app: state.app

});

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        setLanguage
    }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);
