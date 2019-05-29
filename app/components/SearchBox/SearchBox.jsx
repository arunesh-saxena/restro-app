import React from 'react';

const SearchBox = (props) => {
    return (
        <div class="search-box">
            <label htmlFor="search-input">Search:</label>
            <input type="text" id="search-input" placeholder="Search by name"></input>
        </div>
    );
}

export default SearchBox;