

const SignInForm = ({email, setEmail, password, setPassword, signInUser, signIn, setSignIn}) => {

    return(
        <>
        <div className="loginForm-heading">
                        <h1 >Sign In</h1>
                    </div>
                    
                    <div className="LoginForm-emailDiv">
                        <label htmlFor="email" className="LoginForm-emailLabel">Email</label><br />
                        <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value);}} className="LoginForm-emailInput inputArea" />
                    </div>

                    <div className="passwordDiv">
                        <label htmlFor="password" className="LoginForm-passwordLabel">Password</label><br />
                        <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value);}} className="LoginForm-passwordInput inputArea" />
                    </div>

                    <div className="LoginForm-submitButtonDiv">
                        <input type="submit" value="submit" className="LoginForm-submitButton" onClick={() => {signInUser()}}  />
                    </div>

                    <div>
                        <p className="LoginForm-SwitchText"> 
                            Don't have an account? <span> <i onClick={()=> {setSignIn(false); setEmail(""); setPassword("");}} className="LoginForm-changeLinkText" >Sign Up </i>.</span>
                        </p>
                    </div>
        </>
    );
}

export default SignInForm;