import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../Redux/Cart/CartAction'
import { selectCartItemsCount } from '../../Redux/Cart/CartSelectors';

import { CartIconContainer, ShoppingIcon, ItemCountContainer } from './CartIcon.Styles'

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <CartIconContainer onClick={toggleCartHidden}>
        <ShoppingIcon />
        <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartIconContainer>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);