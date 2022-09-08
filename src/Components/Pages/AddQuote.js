import Header from '../Header'
import Form from '../Form'
import React from 'react'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import Loading from '../FormComponents/Loading'

const AddQuote = ({quotes, setQuotes, loading, setLoading}) => {
    
    window.onload = async () => {
        if(quotes.length === 0)
            await getQuotes()
        else
            setLoading(false)
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
            <Header />
            {
            (quotes.length === 0 && loading) ? <Loading /> : <Form quotes={quotes} setQuotes={setQuotes} setLoading={setLoading}/>        
            }        
        </>
    )
}

export default AddQuote;

