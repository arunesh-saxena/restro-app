import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import InfoMessage from '../infoMessage/InfoMessage';

class ServerMsg extends Component {
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
            // <p className={className}>
            //     {heading && <strong>{heading}</strong>}
            //     {message}
            // </p>
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
        let renderComp = '----------no error and msg----------';
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
export default connect(
    mapStateToProps,
    null
)(ServerMsg);
