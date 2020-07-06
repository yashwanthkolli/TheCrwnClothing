import React from 'react';

import SignIn from '../Components/SignIn/SignIn'

import './SignInAndSignUpPage.Styles.scss';
import SignUp from '../Components/SignUp/SignUp';

const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>
)

export default SignInAndSignUpPage;