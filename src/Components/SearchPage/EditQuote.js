import './EditQuote.css'
import React from 'react'

import BackArrow from '../../elements/backArrow.png'
import {useState} from 'react'
import Header from '../Header'
import EditQuoteFormPage from './EditQuoteComponents/EditQuoteFormPage'

import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

async function updateQuote(originalQuote, quote, author, rating, source,setEditQuote, setSearchQuery, setViewableQuotes, searchQuery, setViewQuoteCard){
    console.log("Inside updateQuote")
    var shouldUpdate = false;
    var error = "";

    console.log(quote)

    var updateTime = Date.now();
    if(originalQuote.quote !== quote){
        if(quote !== ""){
            shouldUpdate = true;
        }else{
            error += "Quote should not be null!\n"
        }
    }
    // else{
    //     error += "Quote is the same as original quote"
    // }

    if(originalQuote.author !== author){
        shouldUpdate = true;
    }
    if(rating !== originalQuote.rating){
        shouldUpdate = true
    }

    if(source !== originalQuote.source)
        shouldUpdate = true;

    if(shouldUpdate){
        setViewQuoteCard(false);
        try {
            var db = firebase.firestore();
        db.collection("quotes").doc(originalQuote.id).set({
            quote: quote,
            author: author,
            rating:rating,
            source:source,
            time:originalQuote.time,
            updateTime: updateTime
        }).then().finally(()=>{
            // Add a component here which would pop up when quote is updated
            setViewableQuotes([]);
            setSearchQuery("");
            setEditQuote(false)
        });
        } catch (e) {
            console.log(e)
        }
    }else{
        console.log(error);
    }

}

const   EditQuote = ({setViewQuoteCard, originalQuote, searchQuery, setEditQuote, fetch,  setSearchQuery, setViewableQuotes}) => {
    // console.log(originalQuote)
    var temp = originalQuote;

    const [quote, setQuote] = useState(temp.quote);
    const [author, setAuthor] = useState(temp.author);
    const [rating, setRating] = useState(temp.rating);
    const [source, setSource] = useState(temp.source)
    const uploadTime = temp.time;
    const [updateTime, setUpdateTime] = useState(temp.updateTime)

    return(
        <>
            <div className='EditQuote-Background'>
                {/* BackArrow */}
                <img src={BackArrow} alt="Go Back" className='EditQuote-BackArrow' onClick={()=>{setEditQuote(false)}} />

                <Header/>
                <EditQuoteFormPage setViewQuoteCard={setViewQuoteCard} searchQuery={searchQuery} setSearchQuery={setSearchQuery} setViewableQuotes={setViewableQuotes} setEditQuote={setEditQuote} updateQuote={updateQuote} originalQuote={originalQuote} quote={quote} setQuote={setQuote} author={author} setAuthor={setAuthor} rating={rating} setRating={setRating} source={source} setSource={setSource} time={uploadTime} updateTime={updateTime} setUpdateTime={setUpdateTime}/> 
            </div>
        </>
    )
}

export default EditQuote;

