import React from 'react';

const NumberSelector = (props) => {
    return (
        <div className='number-selector'>
            <button type="button" className="btn btn-primary btn-sm icon-plus" />
            <span className="number-text">{props.number}</span>
            <button type="button" className="btn btn-primary btn-sm icon-minus" />
        </div >
    )
};

export default NumberSelector;