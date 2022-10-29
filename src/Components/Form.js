import React from 'react'
import './Form.css'
import Loading from './FormComponents/Loading';
import QuotesInput from './FormComponents/QuotesInput';
//eslint-disable-next-line
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { userID, quotes, setQuotes, setMessage } from '../App';
import { setSubmitted } from './Pages/AddQuote';

const Form = () => {

    const [quote,setQuote] = React.useState("");
    const [author,setAuthor] = React.useState("");
    const [rating, setRating] = React.useState(0);
    const [source, setSource] = React.useState("");
    const [submitQuoteClicked, setSubmitQuoteClicked] = React.useState(false);

    async function submitQuote (){

        if(author === '')
            setAuthor('anonymous')

        var updatedQuote = '';
        
        if(quote === ''){
            setSubmitted(true);
            setMessage('Quote cannot be empty');
            setAuthor("");
            // alert('Quote cannot be empty'); 
        }
        else if(rating === 0){
            setSubmitted(true);
            setMessage('Add a rating');
            // alert('Add a rating')
        }
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
                setMessage('Quote already exists');
                setSubmitted(true)
                existsFlag = true;
                reset();
            }
        });

        
    
        if(!existsFlag)
            toFirebase();        
    }

    const toFirebase = async () => {
        setMessage('Quote submitted Successfully!');
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
                setSubmitted(true);
                var tempArr = quotes;
                var temp = {
                    quote: quote,
                    author: author,
                    rating: rating,
                    time: Date.now(),
                    source: source,
                    isFavourite: false,
                    userID: userID,
                    };
                tempArr.push(temp);
                setQuotes(tempArr)
                reset();
            })
        }catch(e){
                setSubmitQuoteClicked(false);
            // console.log(e);
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