import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ServerErrors extends Component {
    renderAjaxErrors() {
        const className = 'server-error alert alert-dark';
        const message =
            (this.props.errors &&
                this.props.errors.data &&
                this.props.errors.data.message) ||
            null;
        const heading = this.props.heading || null;

        return (
            <p className={className}>
                {heading && <strong>{heading}</strong>}
                {message}
            </p>
        );
    }
    render() {
        if (
            this.props &&
            this.props.errors &&
            this.props.errors.ajaxRequestStatus === 'success'
        ) {
            return null;
        }
        return this.renderAjaxErrors();
    }
}

ServerErrors.propTypes = {
    heading: PropTypes.string
};

const mapStateToProps = state => ({
    errors: state.errors,
    commonLabels: {}
});

export default connect(
    mapStateToProps,
    null
)(ServerErrors);
