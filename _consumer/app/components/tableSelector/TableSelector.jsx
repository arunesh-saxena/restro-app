import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TableSelector = (props) => {
    const { tableList, tableText, tableChangeHandler } = props;
    const tableLable = tableText || 'Select Table';
    const selectInput = React.createRef();
    if (!tableList.length) {
        return '';
    }
    const getOptions = (tables = []) => {
        const opts = tables.map((table, ind) => (
            <option key={ind} value={table.tableId}>
                {table.label}
            </option>
        ));

        return opts;
    };
    const changeHandler = () => {
        const tableID = selectInput.current.value;
        tableChangeHandler(tableID);
    };

    return (
        <div className="table-selector-container">
            <label>{tableLable}</label>
            <select
                ref={selectInput}
                className="table-selector"
                onChange={() => {
                    changeHandler();
                }}
            >
                <option value={null}>Select Table</option>
                {getOptions(tableList)}
            </select>
        </div>
    );
};

TableSelector.propTypes = {
    tableList: PropTypes.arrayOf(
        PropTypes.shape({
            tableId: PropTypes.number.isRequired,
            label: PropTypes.string.isRequired
        })
    ).isRequired,
    tableText: PropTypes.string,
    tableChangeHandler: PropTypes.func
};

export default TableSelector;
