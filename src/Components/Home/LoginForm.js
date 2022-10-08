import React from "react";
import './LoginForm.css'
import SignUpForm from "../LoginComponents/SignUpForm";
import SignInForm from "../LoginComponents/SignInForm";
const LoginPage = ({email,signInUser, setEmail, password, setPassword, confirmPassword, setConfirmPassword, createUser, signIn, setSignIn}) => {

    return(
        <>
            <div className="LoginForm-outerArea">
                <div className="LoginForm-innerArea">                
                
                {
                signIn ? 
                <SignInForm email={email} signInUser={signInUser} setEmail={setEmail} password={password} setPassword={setPassword} setConfirmPassword={setConfirmPassword} confirmPassword={confirmPassword} setSignIn={setSignIn}/> :
                <SignUpForm email={email} createUser={createUser} setEmail={setEmail} password={password} setPassword={setPassword} setConfirmPassword={setConfirmPassword} confirmPassword={confirmPassword} setSignIn={setSignIn}/>
                }
                </div>
            </div>        
        </>
    );
}

export default LoginPage;