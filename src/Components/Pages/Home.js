import React from 'react';
import Header from '../Header';
import '../Home/Home.css'
import LoginPage from '../Home/LoginForm';
import {getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

// import HomeIllustration from '../../elements/HomeIllustration.svg'

const Home = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState(""); 
    

    async function createUser(){
        const auth = getAuth();
        console.log("Creating user");

        if(email.length === 0 || password.length === 0 || confirmPassword.length === 0)
            return;
        if(password !== confirmPassword)
            return alert('Passwords do not match'); 

         await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            }).catch(error => {
                
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log("Error Code " + errorCode);
                    console.log("Error message : " + errorMessage);
                
            });
        
    }

    return(
        <>
            <div >
                {/* <img src={HomeIllustration} alt="Illustration" className="Home-Illustration" /> */}
            </div>
            
            <div className='Home-Header'>
                <Header />
            </div>

            <div className='Home-divSlash'>
                <div className='Home-Slash'></div>
            </div>           

            <div className='Home-Login'>
                <LoginPage email={email} createUser={createUser} setEmail={setEmail} password={password} setPassword={setPassword} setConfirmPassword={setConfirmPassword} confirmPassword={confirmPassword}/>
            </div>

        </>
    );

}

export default Home;