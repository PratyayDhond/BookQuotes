import React from 'react'
import './Form.css'
import Loading from './FormComponents/Loading';
import QuotesInput from './FormComponents/QuotesInput';
//eslint-disable-next-line
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { userID, quotes, setQuotes } from '../App';
const Form = () => {

    const [quote,setQuote] = React.useState("");
    const [author,setAuthor] = React.useState("");
    const [rating, setRating] = React.useState(0);
    const [source, setSource] = React.useState("");
    const [submitQuoteClicked, setSubmitQuoteClicked] = React.useState(false);

    async function submitQuote (){
        var updatedQuote = '';
        if(author === '')
            setAuthor('anonymous')
        
        if(quote === '')
            alert('Quote cannot be empty'); 
        else if(rating === 0)
            alert('Add a rating')
        else{
            
            setSubmitQuoteClicked(true)
            checkForQuotes(updatedQuote)
        }
        
    }
    
    function reset(){
        setSubmitQuoteClicked(false);
        setQuote("");
        setAuthor("");
        setRating(0);
        setSource("");
    }

    const checkForQuotes = async (updatedQuote) => {
       
        setSubmitQuoteClicked(false);
        var existsFlag = false;
        quotes.forEach((q) => {
            if(quote.toUpperCase()  === q.quote.toUpperCase() && !existsFlag){
                alert('Quote already exists');  
                existsFlag = true;
                reset();
            }
        });

        
    
        if(!existsFlag)
            toFirebase();        
    }

    const toFirebase = async () => {
        try{
            await firebase.firestore().collection("quotes").add({
                quote: quote,
                author: author,
                rating: rating,
                time: Date.now(),
                source: source,
                isFavourite: false,
                updateTime: 0,
                userID: userID, 
            }).finally(()=> {
            console.log("In here now")

                var tempArr = quotes;
                var temp = {
                    quote: quote,
                    author: author,
                    rating: rating,
                    time: Date.now(),
                    source: source,
                    isFavourite: false,
                    };
                tempArr.push(temp);
                setQuotes(tempArr)
                reset();
            })
        }catch(e){

                setSubmitQuoteClicked(false);
            console.log(e);
        }
    }

    return(
        <>
            { (!submitQuoteClicked) ? 
            <QuotesInput source={source} setSource={setSource} quote={quote} setQuote={setQuote} author={author} setAuthor={setAuthor} rating={rating} setRating={setRating} submitQuote={submitQuote} />
            : <Loading submitQuoteClicked={submitQuoteClicked}/>
            }
        </>
    );
}

export default Form;