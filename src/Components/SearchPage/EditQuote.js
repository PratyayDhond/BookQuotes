import './EditQuote.css'
import React from 'react'

import BackArrow from '../../elements/backArrow.png'
import {useState} from 'react'
import Header from '../Header'
import EditQuoteFormPage from './EditQuoteComponents/EditQuoteFormPage'
import { quotes, setQuotes  } from '../../App'; 
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

import {setMessage} from '../../App';
import {setIconClicked} from '../Pages/SearchQuotes'

async function updateQuote(originalQuote, quote, author, rating, source,setEditQuote, setSearchQuery, setViewQuoteCard){
    var shouldUpdate = false;

    var updateTime = Date.now();
    if(originalQuote.quote !== quote){
        if(quote !== ""){
            shouldUpdate = true;
        }else{
            setMessage("Quote should not be empty!");
            setIconClicked(true);
        }
    }

    if(originalQuote.author !== author){
        shouldUpdate = true;
    }
    if(rating !== originalQuote.rating){
        shouldUpdate = true
    }

    if(source !== originalQuote.source)
        shouldUpdate = true;

    if(shouldUpdate){
        setMessage("Quote Updated successfully");
        setIconClicked(true);
        setViewQuoteCard(false);
        try {
            var db = firebase.firestore();
        db.collection("quotes").doc(originalQuote.id).set({
            quote: quote,
            author: author,
            rating:rating,
            source:source,
            time:originalQuote.time,
            updateTime: updateTime,
            isFavourite: originalQuote.isFavourite,
            userID: originalQuote.userID
        }).then().finally(()=>{
            //#BOOKMARK
            // Add a component here which would pop up when quote is updated
            var temp = [];
            quotes.forEach( q => {
                if(q.id !== originalQuote.id)
                    temp.push(q);
            })
            originalQuote.quote = quote;
            originalQuote.author = author;
            originalQuote.rating = rating;
            originalQuote.source = source;
            originalQuote.updateTime = updateTime;      
            temp.push(originalQuote);
            setSearchQuery("");
            setQuotes(temp);
            setEditQuote(false)
        });
        } catch (e) {
            console.log(e)
        }
    }else{
    }

}

const   EditQuote = ({setViewQuoteCard, originalQuote, searchQuery, setEditQuote,  setSearchQuery}) => {
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
                <EditQuoteFormPage setViewQuoteCard={setViewQuoteCard} searchQuery={searchQuery} setSearchQuery={setSearchQuery} setEditQuote={setEditQuote} updateQuote={updateQuote} originalQuote={originalQuote} quote={quote} setQuote={setQuote} author={author} setAuthor={setAuthor} rating={rating} setRating={setRating} source={source} setSource={setSource} time={uploadTime} updateTime={updateTime} setUpdateTime={setUpdateTime}/> 
            </div>
        </>
    )
}

export default EditQuote;

