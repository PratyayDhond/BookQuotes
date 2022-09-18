import React from 'react';
import Header from '../Header';
import '../Home/Home.css'
import { useNavigate } from 'react-router-dom'
import LoginPage from '../Home/LoginForm';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

// import HomeIllustration from '../../elements/HomeIllustration.svg'

const Home = (props) => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState(""); 
    const [signIn, setSignIn] = React.useState(false);
    var userID ="";
    var isError = false;    
    var navigate = useNavigate();

    async function createUser(){
        const auth = getAuth();
        console.log("Creating user");

        if(email.length === 0 || password.length === 0 || confirmPassword.length === 0)
            return;
        if(password !== confirmPassword)
            return alert('Passwords do not match'); 

         await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
                const user = userCredential.user;
                console.log(user.uid);
                userID = user.uid;
            }).catch(error => {
                
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log("Error Code " + errorCode);
                    console.log("Error message : " + errorMessage);
                
            });
        
    }

    async function signInUser(){
        const auth = getAuth();
        console.log("Signing the user in");

        if(email.length === 0 || password.length === 0)
            return;
        
        await signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
                const user = userCredential.user;
                console.log(user.uid);
                userID = user.uid;
        }).catch((error) => {
            isError = true;
            console.log(error.code);
            alert(error.code);

            if(error.code === "auth/invalid-email"){
                setEmail("");
                setPassword("");
            }else if(error.code === "auth/wrong-password"){
                setPassword("");    
            }
        }).finally(()=>{
            handleRoute();
        });    
    }

    function handleRoute(){
        if(!isError){
            console.log(userID);
            navigate('viewQuotes', {state:{userID: userID}});
        }
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
                <LoginPage email={email} createUser={createUser} signInUser={signInUser} setEmail={setEmail} password={password} setPassword={setPassword} setConfirmPassword={setConfirmPassword} confirmPassword={confirmPassword} signIn={signIn} setSignIn={setSignIn}/>
            </div>

        </>
    );

}

export default Home;