import Header from '../Header'
import Form from '../Form'
import React from 'react'
import Home from './Home'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import Loading from '../FormComponents/Loading'
import { useLocation } from 'react-router-dom'
import {quotesCalled,userID, setUserID, quotes, setQuotes, setQuotesCalled, userFavourites, setUserFavourites, loading, setIsAdmin} from '../../App.js'

async function getUserFavouriteQuotesAndIsAdmin(userID){
    console.log("Called in AddQuote.js -> getUserFavouriteQuotesAndIsAdmin");
    await firebase.firestore().collection("users").doc(userID).get().then(r => {
        setUserFavourites(r.data().favourite);
        setIsAdmin(r.data().isAdmin);
    })
}

async function getQuotes ()  {
    setQuotesCalled(true);
    console.log("Called in AddQuote.js -> getQuotes");
    try{
        var firebaseQuotes = [];
        await firebase.firestore().collection("quotes").get().then((querySnapshot) =>  {
                querySnapshot.forEach(e => {
                    var data = e.data();
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

export default AddQuote;

