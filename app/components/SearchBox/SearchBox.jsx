import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SearchBox = props => {
  let searchInput = React.createRef();
  const searchLabel = props.searchLabel || 'Search :';
  const placeholder = props.placeholder || `${searchLabel}...`;
  const className = props.className || '';
  const [isIconShow, setisIconShow] = useState(false);
  const onChangeHandler = e => {
    props.changeHandler(searchInput.current.value);
    setisIconShow(!!searchInput.current.value.length);
  };
  const clearText = () => {
    searchInput.current.value = '';
    props.changeHandler(searchInput.current.value);
    setisIconShow(false);
  };

  return (
    <div className={`search-box ${className}`}>
      <label htmlFor="search-input">{searchLabel}:</label>
      <div className="input-wrapper">
        <input
          type="text"
          id="search-input"
          ref={searchInput}
          placeholder={placeholder}
          onChange={e => onChangeHandler(e)}
        />
        {isIconShow && (
          <span
            className="icon icon-cross"
            onClick={() => {
              clearText();
            }}
          />
        )}
      </div>
    </div>
  );
};

SearchBox.propTypes = {
  placeholder: PropTypes.string,
  searchLabel: PropTypes.string,
  onChangeHandler: PropTypes.func,
  className: PropTypes.string,
};
export default SearchBox;
