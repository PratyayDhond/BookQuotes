import React from 'react';
import Header from '../Header';
import '../Home/Home.css'
import { useNavigate } from 'react-router-dom'
import LoginPage from '../Home/LoginForm';
import firebase from "firebase/compat/app";
import "firebase/firestore";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

// import HomeIllustration from '../../elements/HomeIllustration.svg'
var userID = "";

const Home = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState(""); 
    const [signIn, setSignIn] = React.useState(true);
    userID ="";
    var isError = false;    
    var navigate = useNavigate();

    async function createUser(){
        const auth = getAuth();
        if(email.length === 0 || password.length === 0 || confirmPassword.length === 0)
            return;
        if(password !== confirmPassword)
            return alert('Passwords do not match'); 

         await createUserWithEmailAndPassword(auth, email, password).then( async (userCredential) => {
                const user = userCredential.user;
                userID = user.uid;
                await firebase.firestore().collection("users").doc(userID).set({
                    favourite: [],
                    isAdmin: false,
                }).finally(() => {
                });
                await signInUser();
                setConfirmPassword("");
                setEmail("");
                setPassword("");
            }).catch(async error => {
                
                    const errorCode = error.code;
                    // const errorMessage = error.message;
                    if(errorCode === "auth/email-already-in-use" ){
                        alert("account already exists")
                        setSignIn(true);
                        setPassword("");
                        setConfirmPassword("");
                    }

                    // console.log("Error Code " + errorCode);
                    // console.log("Error message : " + errorMessage);
                
            });
        
    }

    async function signInUser(){
        const auth = getAuth();

        if(email.length === 0 || password.length === 0)
            return;
        
        await signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
                const user = userCredential.user;
                userID = user.uid;
        }).catch((error) => {
            isError = true;
            if(error.code === "auth/invalid-email"){
                setEmail("");
                setPassword("");
            }else if(error.code === "auth/wrong-password"){
                setPassword("");    
            }else if(error.code === "auth/user-not-found"){
                alert("No account detected! Create a new account?")
                setSignIn(false);
                setPassword("");
            }
        }).finally(()=>{
            handleRoute();
        });    
    }

    function handleRoute(){
        // alert(isError)
        if(!isError){
            navigate('/addQuote', {state:{userID: userID}});
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