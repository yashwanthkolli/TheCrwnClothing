import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import PreviewCollection from '../PreviewCollection/PreviewCollection';

import { selectCollectionsForPreview } from '../../Redux/Shop/ShopSelector';
import { CollectionsOverviewContainer } from './CollectionOverview.Styles';

const CollectionsOverview =({ collections }) => (
    <CollectionsOverviewContainer>
    {
        collections.map(({id, ...otherCollectionProps}) => (
            <PreviewCollection key={id} {...otherCollectionProps} />
        ))
    }
    </CollectionsOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);