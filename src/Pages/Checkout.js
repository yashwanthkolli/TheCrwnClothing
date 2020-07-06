import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../Redux/Cart/CartSelectors'

import './Checkout.Styles.scss';
import CheckoutItem from '../Components/CheckoutItem/CheckoutItem';
import StripeCheckoutButton from '../Components/StripeButton/StripeButton';

const CheckoutPage = ({cartItems, total}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='checkout-block'>
                <span>Product</span>
            </div>
            <div className='checkout-block'>
                <span>Discription</span>
            </div>
            <div className='checkout-block'>
                <span>Quantity</span>
            </div>
            <div className='checkout-block'>
                <span>Price</span>
            </div>
            <div className='checkout-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => 
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            )
        }
        <div className='total'>
            <span>TOTAL: ${total}</span>
        </div>
        <div className='test-warning'>
            *This is just a test web app. Please use Following test credit card or debit card fo payments* 
            <br />
            Credit- 4242 4242 4242 4242 - Exp: any future date - CVV: any 3 digit code
            <br />
            Debit- 5200 8282 8282 8210 - Exp: any future date - CVV: any 3 digit code
        </div>
        <StripeCheckoutButton price={total} />
    </div>
)

const mapStateToProps =createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);