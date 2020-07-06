import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';
import { selectCartItems } from '../../Redux/Cart/CartSelectors';
import { toggleCartHidden } from '../../Redux/Cart/CartAction'

import './CartDropdown.Styles.scss';

const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
        {
            cartItems.length ? (
                cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />))
            ) : (
                <span className='empty-message'>Your Cart Is Empty</span>
            )
        }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
        }}>
            Go To CheckOut
        </CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));