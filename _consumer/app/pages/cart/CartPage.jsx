import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class CartPage extends Component {
    render() {
        const menuList = this.props.menuListFiltered;
        return <div>cart page comming soon</div>;
    }
}
const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartPage);
