import React from 'react';
import PropTypes from 'prop-types';

const Image = (props) => {
    return (
        <div className='img-section'>
            <picture>
                <source media="(min-width: 992px)" srcSet={props.imageURL} />
                <source media="(max-width: 991px)" srcSet={props.imageURL} />
                <img src={props.imageURL} alt={props.alt} title={props.title} />
            </picture>
        </div>
    )
};
Image.propTypes = {
    imageURL: PropTypes.string.require,
    alt: PropTypes.string,
    titile: PropTypes.string
};
export default Image;