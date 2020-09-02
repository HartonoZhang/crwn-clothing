import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import {ButtonContainer, SignInContainer, SignInTitleContainer} from './sign-in.styles'

class SignIn extends React.Component {
    constructor(){
        super();

        this.state = {
            email : "",
            password : ""
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {email, password} = this.state;

        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});
        } catch(error){
            console.log(error);
        }
        
    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({ [name]: value })
    }

    render() {
        return (
            <SignInContainer>
                <SignInTitleContainer>I already have an account</SignInTitleContainer>
                <span>Sign in with your email and password</span>
            

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" handleChange={this.handleChange} type="email" label="Email" value={this.state.email} required />
                    <FormInput name="password" handleChange={this.handleChange} type="password" label="Password" value={this.state.password} required />
                    <ButtonContainer>
                        <CustomButton type="submit" value="Submit Form" >Sign In</CustomButton>
                        <CustomButton type="button" onClick = {signInWithGoogle } isGoogleSignIn >Sign In With Google</CustomButton>
                    </ButtonContainer>
                </form>
            </SignInContainer>
        );
    }
}

export default SignIn;