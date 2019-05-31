import React from 'react';

const SearchBox = (props) => {
    const onChangeHandler = (e) => {
        props.changeHandler(e.target.value);
    }
    return (
        <div className="search-box" >
            <label htmlFor="search-input">Search:</label>
            <input
                type="text"
                id="search-input"
                placeholder="Search by name"
                onChange={(e) => onChangeHandler(e)} />
        </div>
    );
};

SearchBox.propTypes = {};
export default SearchBox;