import React, { Component } from 'react'

import './SignIn.Styles.scss';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import {auth, signInWithGoogle} from '../../Firebase/Firebase'

export default class SignIn extends Component {
    constructor(){
        super();
        this.state={
            email: '',
            password: ''
        }
    }
    handleSubmit = async e => {
        e.preventDefault();

        const { email, password } = this.state;

        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email:'', password:''})
        } catch(error){
            console.log(error);
        }
        
    }
    handleChange = e => {
        const {name,value} =e.target;
        this.setState({ [name]: value })
    }
    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in using your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' label='Email' handleChange={this.handleChange} value={this.state.email} required />
                    <FormInput name='password' type='password' label='password' handleChange={this.handleChange} value={this.state.password} required />
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
