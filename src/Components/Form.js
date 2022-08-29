import React from 'react'
import './Form.css'
import Loading from './FormComponents/Loading';
import QuotesInput from './FormComponents/QuotesInput';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
const Form = () => {
    const [quote,setQuote] = React.useState('');
    const [author,setAuthor] = React.useState('');
    const [rating, setRating] = React.useState(0);
    const [submitQuoteClicked, setSubmitQuoteClicked] = React.useState(false);
    const [quotes , setQuotes] = React.useState([]);
    
    //Loading Page will be invoked by the below function being called, loading state will continue till data updated to firebase or some error occurs
    const submitQuote = async () => {
        if(quote === '')
            alert('Quote cannot be empty'); 
        else if(author === '')
            setAuthor('anonymous')
        else if(rating === 0)
            alert('Add a rating')
        else{
            setQuote('"' + quote + '"');
            console.log(quote);  
            toFirebase();
        }
        
    }

    const toFirebase = async () => {
        setSubmitQuoteClicked(!submitQuoteClicked);
        try{
            await firebase.firestore().collection("quotes").get().then((querySnapshot) =>  {
                    querySnapshot.forEach(element => {
                        var data = element.data();
                        setQuotes(arr => [...arr, data]);
                    });
            }).finally(()=> {
                setSubmitQuoteClicked(false);
                console.log(quotes);        
            })
        }catch(e){
                setSubmitQuoteClicked(false);
            console.log(e);
        }
    }

    return(
        <>
            { (!submitQuoteClicked) ? 
            <QuotesInput quote={quote} setQuote={setQuote} author={author} setAuthor={setAuthor} rating={rating} setRating={setRating} submitQuote={submitQuote} submitQuoteClicked={submitQuoteClicked} setSubmitQuoteClicked={setSubmitQuoteClicked}/>
            : <Loading submitQuoteClicked={submitQuoteClicked}/>
            }
            {/* <div className='FormArea'>

                <div className='QuoteForm'>

                    <div className='addAQuote'>Add A Quote!</div>

                    <div>
                        <label htmlFor="quoteInput" className='quoteLabel'>Quote: </label>
                        <input type="text" value={quote} onChange={(e) => {setQuote(e.target.value)}} height='3' className='quoteInput' placeholder='Quote...' />
                    </div>

                    <div className='author'>
                        <label htmlFor="AuthorInput" className='authorLabel'>Author: </label>
                        <input type="text" value={author} onChange={(e)=>{setAuthor(e.target.value)}} className='authorInput' placeholder='Author.. Anonymous if left empty' />
                    </div>

                    <Rating rating={rating} setRating={setRating} />

                    <div className='submitButton'>
                        <input  className='submitButtonInputField' type='submit' name="submit" value="Submit" onClick={submitQuote}/>
                    </div>

                </div>
            </div> */}
        </>
    );
}

export default Form;


/*
    const submitQuote = async () => {
        setSubmitQuoteClicked(!submitQuoteClicked);
        try{
            await firebase.firestore().collection("quotes").get().then((querySnapshot) =>  {
                    querySnapshot.forEach(element => {
                        var data = element.data();
                        setQuotes(arr => [...arr, data]);
                    });
            }).finally(()=> {
                setSubmitQuoteClicked(false);
                console.log(quotes);        
            })
        }catch(e){
                setSubmitQuoteClicked(false);
            console.log(e);
        }
    }
*/