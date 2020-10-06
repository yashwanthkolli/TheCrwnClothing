import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from './Pages/HomePage/Homepage';
import ShopPage from './Pages/ShopPage/ShopPage';
import SignInAndSignUpPage from './Pages/SignInAndSignUpPage/SignInAndSignUpPage';

import CheckoutPage from './Pages/Checkout/Checkout';

import Header from './Components/Header/Header';

import { selectCurrentUser } from './Redux/User/UserSelectors';
import { checkUserSession } from './Redux/User/UserActions';

const App = ({ checkUserSession, currentUser }) => {

  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route exact path='/signIn' render={() => currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
