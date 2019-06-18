import React from 'react';
import PropTypes from 'prop-types';

const Image = (props) => {
    const imageURL =
        props.imgURL || 'http://localhost:4040/assets/images/dummy.png';
    return (
        <div className="img-section">
            <picture>
                <source media="(min-width: 992px)" srcSet={imageURL} />
                <source media="(max-width: 991px)" srcSet={imageURL} />
                <img src={imageURL} alt={props.alt} title={props.title} />
            </picture>
        </div>
    );
};
Image.propTypes = {
    imgURL: PropTypes.string.isRequired,
    alt: PropTypes.string,
    title: PropTypes.string
};
export default Image;
