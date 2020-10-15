import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CartItem from '../CartItem/CartItem';
import { selectCartItems } from '../../Redux/Cart/CartSelectors';
import { toggleCartHidden } from '../../Redux/Cart/CartAction'

import './CartDropdown.Styles.scss'
import { CartDropdownContainer, CartDropdownButton, EmptyMessageContainer, CartItemsContainer } from './CartDropdown.Styles'

const CartDropdown = ({cartItems, history, dispatch}) => (
    <CartDropdownContainer className='cart-dropdown'>
        <CartItemsContainer>
        {
            cartItems.length ? (
                cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />))
            ) : (
                <EmptyMessageContainer>Your Cart Is Empty</EmptyMessageContainer>
            )
        }
        </CartItemsContainer>
        <CartDropdownButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
        }}>
            Go To CheckOut
        </CartDropdownButton>
    </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));