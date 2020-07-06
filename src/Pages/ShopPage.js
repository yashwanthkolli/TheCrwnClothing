import React from 'react';
import { Route } from 'react-router-dom';

import CollectionOverview from '../Components/CollectionsOverview/CollectionsOverview'
import CollectionPage from './Collection';

const ShopPage = ({ match }) => (
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
)

export default ShopPage;

