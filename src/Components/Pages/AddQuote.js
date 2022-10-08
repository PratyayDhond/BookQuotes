import Header from '../Header'
import Form from '../Form'
import React from 'react'
import Home from './Home'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import Loading from '../FormComponents/Loading'
import { useLocation } from 'react-router-dom'

const AddQuote = ( {quotes, setQuotes, loading, setLoading,}) => {
    const {state} = useLocation();
    // console.log("Add Quote : " + state.userID);
    window.onload = async () => {
        if(quotes.length === 0)
            await getQuotes()
        else
            setLoading(false)
    }

    if(state === null){
        window.history.pushState({}, null, "/");
    }

    if(quotes.length === 0){
        //If due to some reasons the quootes array becomes empty. Unexpected entry to the page.
        getQuotes();
    }


    async function getQuotes ()  {
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

