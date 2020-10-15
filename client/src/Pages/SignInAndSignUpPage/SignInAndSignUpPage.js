import React from 'react';

import SignIn from '../../Components/SignIn/SignIn'

import SignUp from '../../Components/SignUp/SignUp';

import { SignInAndSignUpContainer } from './SignInAndSignUpPage.Styles'

const SignInAndSignUpPage = () => (
    <SignInAndSignUpContainer>
        <SignIn />
        <SignUp />
    </SignInAndSignUpContainer>
)

export default SignInAndSignUpPage;