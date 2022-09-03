import React from 'react'
import './Form.css'
import Loading from './FormComponents/Loading';
import QuotesInput from './FormComponents/QuotesInput';
//eslint-disable-next-line
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// import getQuotes from './methods/getQuotes';
const Form = ({quotes, setLoading, setQuotes}) => {
    // console.log(quotes);
    const [quote,setQuote] = React.useState("");
    const [author,setAuthor] = React.useState("");
    const [rating, setRating] = React.useState(0);
    const [source, setSource] = React.useState("");
    const [submitQuoteClicked, setSubmitQuoteClicked] = React.useState(false);

    //Loading Page will be invoked by the below function being called, loading state will continue till data updated to firebase or some error occurs
    async function submitQuote (){
        console.log("Submit Quote Called")
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
            // console.log(quote)
            console.log(q)
            if(quote.toUpperCase()  === q.quote.toUpperCase() && !existsFlag){
                // console.log(quote)
                // console.log(q.quote)
                // console.log("returning true")
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
            }).finally(()=> {
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
                console.log("Temp Array");
                console.log(tempArr);
                setQuotes(tempArr)
                console.log(quotes);
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
            <QuotesInput setQuotes={setQuotes} setLoading={setLoading} source={source} setSource={setSource} quote={quote} quotes={quotes} setQuote={setQuote} author={author} setAuthor={setAuthor} rating={rating} setRating={setRating} submitQuote={submitQuote} />
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