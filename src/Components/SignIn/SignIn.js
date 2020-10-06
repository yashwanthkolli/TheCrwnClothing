import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

import { googleSignInStart, emailSignInStart } from '../../Redux/User/UserActions';

import { SignInContainer, SignInTitle, ButtonsBarContainer } from './SignIn.Styles'

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
    const [userCredentials, setUserCredentials] = useState({
        email: '',
        password: ''
    })

    const { email, password } = userCredentials;

    const handleSubmit = async e => {
        e.preventDefault();
        emailSignInStart(email, password);
    };
    const handleChange = e => {
        const { name, value } = e.target;
        setUserCredentials({ ...userCredentials, [name]: value })
    }

    return (
        <SignInContainer>
            <SignInTitle>I already have an account</SignInTitle>
            <span>Sign in using your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput name='email' type='email' label='Email' handleChange={handleChange} value={email} required />
                <FormInput name='password' type='password' label='password' handleChange={handleChange} value={password} required />
                <ButtonsBarContainer>
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>Sign In With Google</CustomButton>
                </ButtonsBarContainer>
            </form>
        </SignInContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);