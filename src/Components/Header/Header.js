import React from 'react';
import {Link} from 'react-router-dom';
import {auth} from '../../Firebase/Firebase';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../Redux/User/UserSelectors';
import { selectCartHidden } from '../../Redux/Cart/CartSelectors';

import {ReactComponent as Logo} from '../../Assets/crown.svg'

import './Header.Style.scss';
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';

const Header = ({currentUser, hidden}) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link> 
        <div className='options'>
            <Link to='/shop' className='option'>Shop</Link>
            <Link to='/contact' className='option'>Contact</Link>
            {
                currentUser ? 
                <div className='option' onClick={() => auth.signOut()}>Sign Out</div>
                :
                <Link className='option' to='/signIn'>Sign In</Link>
            }
            <CartIcon />
        </div>
        {
            hidden ? null :
            <CartDropdown />
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);