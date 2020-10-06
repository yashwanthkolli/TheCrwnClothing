import React from 'react';

import { CartItemContainer, CartItemImage, ItemDetailsContainer } from './CartItem.Styels'

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
    <CartItemContainer>
        <CartItemImage src={imageUrl} alt='Item' />
        <ItemDetailsContainer>
            <span className='name'>{name}</span>
            <span className='price'>{quantity} x ${price}</span>
        </ItemDetailsContainer>
    </CartItemContainer>
)

export default CartItem;