import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

import { SignUpContainer, SignUpTitle } from './SignUp.Styles';

import { signUpStart } from '../../Redux/User/UserActions';

const SignUp = ({ signUpStart }) => {
    const [userCredentials, setUserCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const { displayName, email, password, confirmPassword } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords don't match")
            return;
        }
        signUpStart({ displayName, email, password })
    };

    const handleChange = event => {
        const { name, value } = event.target;
        setUserCredentials({ ...userCredentials, [name]: value });
    }

    return (
        <SignUpContainer>
            <SignUpTitle>I do not have an account</SignUpTitle>
            <span>Create an accout here</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    handleChange={handleChange}
                    label='Display Name'
                    required
                />

                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    handleChange={handleChange}
                    label='Email'
                    required
                />

                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    handleChange={handleChange}
                    label='Password'
                    required
                />

                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    handleChange={handleChange}
                    label='Confirm Password'
                    required
                />

                <CustomButton type='Submit'>Create Account</CustomButton>
            </form>
        </SignUpContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp)