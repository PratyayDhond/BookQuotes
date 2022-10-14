import Header from '../Header'
import Form from '../Form'
import React from 'react'
import Home from './Home'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import Loading from '../FormComponents/Loading'
import { useLocation } from 'react-router-dom'
import {quotesCalled,userID, setUserID, quotes, setQuotes, setQuotesCalled, userFavourites, setUserFavourites, loading, setIsAdmin} from '../../App.js'

//BOOKMARK
//First instance of calling firebase firestore
// Getting the user details from the user collection -> user doc
async function getUserFavouriteQuotesAndIsAdmin(userID){
    //#BOOKMARK - Remove the console.log statement below once every functionality is working
    console.log("Called in AddQuote.js -> getUserFavouriteQuotesAndIsAdmin");
    console.log(userID);
    await firebase.firestore().collection("users").doc(userID).get().then(r => {
        setUserFavourites(r.data().favourite);
        setIsAdmin(r.data().isAdmin);
    })
}

//BOOKMARK
//Second instance of calling firebase firestore
//Getting the quotes from the quotes collection -> all quotes
async function getQuotes ()  {
    setQuotesCalled(true);
    //#BOOKMARK - Remove the console.log statement below once every functionality is working
    console.log("Called in AddQuote.js -> getQuotes");
    try{
        var firebaseQuotes = [];
        await firebase.firestore().collection("quotes").get().then((querySnapshot) =>  {
                querySnapshot.forEach(e => {
                    var data = e.data();
                    data.id = e.id;
                    firebaseQuotes.push(data);
                });
        }).finally(()=> { 
            setQuotes(firebaseQuotes)
        })
    }catch(e){
        console.log(e);   
    }
}   



const AddQuote = () => {

    const {state} = useLocation();
    if(userID === null){
        if(state === null){
            window.history.pushState({}, null, "/");
        }else{
            setUserID(state.userID);
            if(!quotesCalled){
                if(quotes.length === 0)
                    getQuotes()

                if(userFavourites.length === 0){
                    // BOOKMARK POSSIBLY GLITCHY
                    getUserFavouriteQuotesAndIsAdmin(state.userID || userID);
                }
            }
        }
    }

    return(
        <>
            {
                (state === null && userID === null)
                ?
                <div>
                    <Home></Home>
                </div>
                :
                <div>
                    <Header />
                    {
                        (quotes.length === 0 && loading) ? <Loading /> : <Form />        
                    }  
                </div>      
            }
        </>
    )
}
export {getQuotes, getUserFavouriteQuotesAndIsAdmin};
export default AddQuote;

