

const SignUpForm = ({email, setEmail, password, setPassword, confirmPassword, setConfirmPassword, createUser, signIn, setSignIn}) => {
    return(
        <>
        <div className="loginForm-heading">
                        <h1 >Sign Up</h1>
                    </div>
                    
                    <div className="LoginForm-emailDiv">
                        <label htmlFor="email" className="LoginForm-emailLabel">Email</label><br />
                        <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value);}} className="LoginForm-emailInput inputArea" />
                    </div>

                    <div className="passwordDiv">
                        <label htmlFor="password" className="LoginForm-passwordLabel">Password</label><br />
                        <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value);}} className="LoginForm-passwordInput inputArea" />
                    </div>

                    <div className="passwordDiv">
                        <label htmlFor="password" className="LoginForm-passwordLabel">Confirm Password</label><br />
                        <input type="password" value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value);}} className="LoginForm-passwordInput inputArea" />
                    </div>

                    <div className="LoginForm-submitButtonDiv">
                        <input type="submit" value="submit" className="LoginForm-submitButton" onClick={() => {createUser()}}  />
                    </div>

                    <div>
                        <p className="LoginForm-SwitchText">
                            already a user? <span> <i onClick={()=> {setSignIn(true);  setEmail(""); setPassword(""); setConfirmPassword("");}} className="LoginForm-changeLinkText" >Sign In </i>.</span>
                        </p>
                    </div>
        </>
    );
}

export default SignUpForm;