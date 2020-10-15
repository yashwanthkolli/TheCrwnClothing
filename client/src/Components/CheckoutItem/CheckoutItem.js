import React from 'react';
import { connect } from 'react-redux';

import { clearItem, addItem, removeItem } from '../../Redux/Cart/CartAction';

import { CheckoutItemContainer, CheckoutItemImageContainer, CheckoutItemTextContainer, CheckoutItemQuantityContainer, CheckoutItemRemoveButtonContainer } from './CheckoutItem.Styles'

const CheckoutItem = ({cartItem, clearItem, addItem, removeItem}) => {
    const { name, imageUrl, price, quantity } = cartItem
    return (
    <CheckoutItemContainer>
        <CheckoutItemImageContainer>
            <img src={imageUrl} alt='item' />
        </CheckoutItemImageContainer>
        <CheckoutItemTextContainer>{name}</CheckoutItemTextContainer>
        <CheckoutItemQuantityContainer>
            <div onClick={() => removeItem(cartItem)}>&#10094;</div>
            <span>{quantity}</span>
            <div onClick={() => addItem(cartItem)}>&#10095;</div>
        </CheckoutItemQuantityContainer>
        <CheckoutItemTextContainer className='price'>{price}</CheckoutItemTextContainer>
        <CheckoutItemRemoveButtonContainer onClick={() => clearItem(cartItem)}>&#10005;</CheckoutItemRemoveButtonContainer>
    </CheckoutItemContainer>
)};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItem(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);