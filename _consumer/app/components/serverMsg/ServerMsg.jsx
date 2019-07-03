import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ajaxRequestRest } from '../../actions/serverInfo';

import InfoMessage from '../infoMessage/InfoMessage';

class ServerMsg extends Component {
    componentWillUnmount() {
        this.props.ajaxRequestRest();
    }
    renderMessage() {
        const className = 'alert-success';
        const message =
            (this.props.serverInfo &&
                this.props.serverInfo.data &&
                this.props.serverInfo.data.message) ||
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
            (this.props.serverInfo &&
                this.props.serverInfo.data &&
                this.props.serverInfo.data.message) ||
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
                this.props.serverInfo &&
                this.props.serverInfo.ajaxRequestStatus) ||
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

ServerMsg.propTypes = {
    serverInfo: PropTypes.shape({
        ajaxRequestStatus: PropTypes.string,
        data: PropTypes.shape({
            message: PropTypes.string
        })
    })
};

const mapStateToProps = state => ({
    serverInfo: state.serverInfo,
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
