import React, { Component } from 'react';

class NumberSelector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedNumber: 0,
            isDecrementDisable: false,
        };
    }

    componentDidMount() {
        const selectedNumber = this.props.number;
        this.setState({
            selectedNumber,
            isDecrementDisable: selectedNumber < 1,
        });
    }

    setDisableButton(selectedNumber) {
        const isDecrementDisable = selectedNumber < 1;
        this.setState({
            isDecrementDisable,
        });
    }

    decrementNumber() {
        let { selectedNumber } = this.state;
        selectedNumber -= 1;
        this.setState({
            selectedNumber,
        });
        this.setDisableButton(selectedNumber);

        this.props.changeNumberHandler(selectedNumber);
    }

    incrementNumber() {
        let { selectedNumber } = this.state;
        selectedNumber += 1;
        this.setState({
            selectedNumber,
        });
        this.setDisableButton(selectedNumber);

        this.props.changeNumberHandler(selectedNumber);
    }

    render() {
        const selectedNumberValue = this.state.selectedNumber;

        return (
            <div className="number-selector">
                <button
                    type="button"
                    disabled={this.state.isDecrementDisable}
                    className="btn btn-primary btn-sm icon-minus"
                    onClick={() => {
                        this.decrementNumber();
                    }}
                />
                <span className="number-text">{selectedNumberValue}</span>

                <button
                    type="button"
                    className="btn btn-primary btn-sm icon-plus"
                    onClick={() => {
                        this.incrementNumber();
                    }}
                />
            </div>
        );
    }
}

export default NumberSelector;
