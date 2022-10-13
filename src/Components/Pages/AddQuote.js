import Header from '../Header'
import Form from '../Form'
import React from 'react'
import Home from './Home'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import Loading from '../FormComponents/Loading'
import { useLocation } from 'react-router-dom'


async function getUserFavouriteQuotesAndIsAdmin(setUserFavourites, setIsAdmin, userID){
    console.log("Called in AddQuote.js -> getUserFavouriteQuotesAndIsAdmin");
    await firebase.firestore().collection("users").doc(userID).get().then(r => {
        setUserFavourites(r.data().favourite);
        setIsAdmin(r.data().isAdmin);
    })
}

async function getQuotes (setQuotes)  {
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



const AddQuote = ( {quotes, setQuotes, userFavourites, setUserFavourites, loading, setLoading, isAdmin, setIsAdmin}) => {
    const {state} = useLocation();
    if(state === null){
        window.history.pushState({}, null, "/");
    }else{
        if(quotes.length === 0)
            getQuotes(setQuotes)

        if(userFavourites.length === 0){
            getUserFavouriteQuotesAndIsAdmin(setUserFavourites, setIsAdmin, state.userID);
        }else{
            console.log(userFavourites)
            console.log(isAdmin);
        }
    }

    // if(quotes.length === 0){
    //     //If due to some reasons the quootes array becomes empty. Unexpected entry to the page.
    //     getQuotes();
    // }


     
    



    return(
        <>
            {
                state === null
                ?
                <div>
                    <Home></Home>
                </div>
                :
                <div>
                    <Header />
                    {
                        (quotes.length === 0 && loading) ? <Loading /> : <Form userID={state.userID} quotes={quotes} setQuotes={setQuotes} setLoading={setLoading}/>        
                    }  
                </div>      
            }
        </>
    )
}

export default AddQuote;

