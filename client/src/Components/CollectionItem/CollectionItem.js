import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../Redux/Cart/CartAction';
import { CollectionItemContainer, CollectionItemImageContainer, AddButton, CollectionFooterContainer, NameContainer, PriceContainer } from './CollectionItem.Styles'; 

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl} = item
    return(
    <CollectionItemContainer>
        <CollectionItemImageContainer className='image' imageUrl={imageUrl} />
        <CollectionFooterContainer>
            <NameContainer>{name}</NameContainer>
            <PriceContainer className='price'>${price}</PriceContainer>
        </CollectionFooterContainer>
        <AddButton onClick={() => addItem(item)} inverted>Add tocart</AddButton>
    </CollectionItemContainer>
    )
}

const mapDispatchToProps = dispatch =>({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);