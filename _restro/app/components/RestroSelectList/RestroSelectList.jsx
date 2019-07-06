import React from 'react';
import PropTypes from 'prop-types';

const RestroSelectList = (props) => {
    const { restaurants = [], label, changeHandler } = props;
    const options = [];
    const restroLable = label || 'Select Restaurant';
    restaurants.forEach((v, i) => {
        options.push(
            <option key={i} value={v.restaurantCode}>
                {v.restaurantName}
            </option>
        );
    });
    const onChangeHandler = (e) => {
        const value = e.target.value;
        changeHandler(value);
    };
    return (
        <div className="restro-list-select">
            <select
                id="restroListSelect"
                className="form-control"
                onChange={(e) => {
                    onChangeHandler(e);
                }}
            >
                <option value="">{restroLable}</option>
                {options}
            </select>
        </div>
    );
};

RestroSelectList.propTypes = {
    restaurants: PropTypes.arrayOf(
        PropTypes.shape({
            restaurantCode: PropTypes.string,
            restaurantName: PropTypes.string
        })
    ).isRequired,
    label: PropTypes.string
};

export default RestroSelectList;
