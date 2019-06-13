import React from 'react';
import PropTypes from 'prop-types';

class ToggleButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.initialValue
        };
    }

    changeHandler(e) {
        const val = this.state.value;
        this.setState(
            {
                value: !val
            },
            () => {
                this.props.toggleHandler(this.state.value);
            }
        );
    }

    render() {
        const className = this.props.className || '';
        const checkedLabel = this.props.checkedLabel || 'Yes';
        const unCheckedLabel = this.props.unCheckedLabel || 'No';
        const checkStatus = this.state.value ? 'checked' : 'un-checked';
        return (
            <div className={`toggle-button ${className} ${checkStatus}`}>
                <label className="switch" htmlFor="toggle-button-checkox">
                    <input
                        type="checkbox"
                        id="toggle-button-checkox"
                        checked={this.state.value}
                        onChange={(e) => {
                            this.changeHandler(e);
                        }}
                    />
                    <span className="slider round">
                        <span className="first-label">{checkedLabel}</span>
                        <span className="second-label">{unCheckedLabel}</span>
                    </span>
                </label>
            </div>
        );
    }
}

ToggleButton.propTypes = {
    toggleHandler: PropTypes.func.isRequired,
    initialValue: PropTypes.bool.isRequired,
    className: PropTypes.string,
    // label: PropTypes.string,
    checkedLabel: PropTypes.string,
    unCheckedLabel: PropTypes.string
};
export default ToggleButton;
