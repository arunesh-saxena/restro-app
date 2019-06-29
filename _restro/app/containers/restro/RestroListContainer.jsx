import React from 'react';
import PropTypes from 'prop-types';

import Heading from '../../components/heading/Heading';
import ServerErrors from '../../components/serverErrors/ServerErrors';
import appConstants from '../../appConstants/appConstants';

const RestroListContainer = (props) => {
    const { labels, restroList } = props;

    const renderHeading = () => <Heading text={labels.restroList} />;

    const renderRestroList = () => 'TODO: renderRestroList ';

    return (
        <div className="restro-add-container">
            {renderHeading()}
            <ServerErrors />
            <div className="row justify-content-md-center">
                <div className="col-xs-12 col-md-12">{renderRestroList()}</div>
            </div>
        </div>
    );
};

RestroListContainer.propTypes = {
    labels: PropTypes.shape({}),
    restroList: PropTypes.array
};

export default RestroListContainer;
