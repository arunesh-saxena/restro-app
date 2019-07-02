import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ajaxRequestRest } from '../../actions/errors';

import InfoMessage from '../infoMessage/InfoMessage';

class ServerMsg extends Component {
    componentWillUnmount() {
        this.props.ajaxRequestRest();
    }
    renderMessage() {
        const className = 'alert-success';
        const message =
            (this.props.errors &&
                this.props.errors.data &&
                this.props.errors.data.message) ||
            null;
        const heading = this.props.heading || null;

        return (
            <InfoMessage
                message={message}
                heading={heading}
                infoClass={className}
            />
        );
    }
    renderAjaxErrors() {
        const className = 'alert-dark';
        const message =
            (this.props.errors &&
                this.props.errors.data &&
                this.props.errors.data.message) ||
            null;
        const heading = this.props.heading || null;

        return (
            <InfoMessage
                message={message}
                heading={heading}
                infoClass={className}
            />
        );
    }
    render() {
        const ajaxRequestStatus =
            (this.props &&
                this.props.errors &&
                this.props.errors.ajaxRequestStatus) ||
            null;
        let renderComp = '';
        if (ajaxRequestStatus === 'success') {
            renderComp = this.renderMessage();
        } else if (ajaxRequestStatus === 'failure') {
            renderComp = this.renderAjaxErrors();
        }
        return renderComp;
    }
}

ServerMsg.propTypes = {};

const mapStateToProps = state => ({
    errors: state.errors,
    commonLabels: {}
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            ajaxRequestRest
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ServerMsg);
