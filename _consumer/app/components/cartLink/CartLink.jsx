import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AppUrls from '../../appConstants/appUrls';

const CartLink = (props) => {
    const { headerLabel } = props;
    return (
        <div>
            <Link to={AppUrls.CART} title={headerLabel}>
                {headerLabel}
            </Link>
        </div>
    );
};

CartLink.propTypes = {
    headerLabel: PropTypes.string
};
export default CartLink;
