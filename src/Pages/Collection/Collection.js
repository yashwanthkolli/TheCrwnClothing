import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../Redux/Shop/ShopSelector';

import CollectionItem from '../../Components/CollectionItem/CollectionItem';

import { CollectionPageContainer, CollectionTitle, CollectionItemsContainer } from './Collection.Styles'

const CollectionPage = ({collection}) => {
    const { title, items } = collection
    return (
        <CollectionPageContainer>
            <CollectionTitle>{title}</CollectionTitle>
            <CollectionItemsContainer>
            {
                items.map(item => (
                    <CollectionItem className='collection-item' key={item.id} item={item} />
                ))
            }
            </CollectionItemsContainer>
        </CollectionPageContainer>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);