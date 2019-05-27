import React from 'react';

const ToggleButton = (props) => {
    return (
        <div className='toggle-button'>
            <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
            </label>

        </div>
    )
};

export default ToggleButton;