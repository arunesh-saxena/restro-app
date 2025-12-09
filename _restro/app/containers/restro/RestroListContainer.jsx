import React from 'react';
import PropTypes from 'prop-types';

import Heading from '../../components/heading/Heading';
import ServerMsg from '../../components/serverMsg/ServerMsg';
import RestroItem from '../../components/restroItem/RestroItem';

const RestroListContainer = (props) => {
    const { labels, restroList } = props;

    const renderHeading = () => <Heading text={labels.restroList} />;
    const renderRestroList = () => {
        const list = restroList.map((item, ind) => {
            const restro = {
                restaurantCode: item.restaurantCode,
                restaurantName: item.restaurantName,
                noOfTables: item.noOfTables,
                id: item.id
            };
            return (
                <li key={ind} className="list-group-item">
                    <RestroItem
                        restroDetails={restro}
                        id={item.id}
                        labels={labels}
                    />
                </li>
            );
        });
        const listHeader =
            (restroList.length && (
                <li className="list-group-item">
                    <div className="header-list">
                        <div>{labels.restroCode}</div>
                        <div>{labels.restroName}</div>
                        <div>{labels.noOfTables}</div>
                        <div>{labels.action}</div>
                    </div>
                </li>
            )) ||
            labels.youHaveNoRestaurant;
        return (
            <ul className="list-group">
                {listHeader}
                {list}
            </ul>
        );
    };

    return (
        <div className="restro-add-container">
            {renderHeading()}
            <ServerMsg />
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
