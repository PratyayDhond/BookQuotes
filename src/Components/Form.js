import React from 'react'
import './Form.css'
import Loading from './FormComponents/Loading';
import QuotesInput from './FormComponents/QuotesInput';
//eslint-disable-next-line
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// import getQuotes from './methods/getQuotes';
const Form = () => {
    const [quote,setQuote] = React.useState("");
    const [author,setAuthor] = React.useState('');
    const [rating, setRating] = React.useState(0);
    const [submitQuoteClicked, setSubmitQuoteClicked] = React.useState(false);
    const [quotes , setQuotes] = React.useState([]);
    
    window.onload = async () => {
        await getQuotes()
       console.log(quotes);
    }

    async function getQuotes ()  {
        try{
            await firebase.firestore().collection("quotes").get().then((querySnapshot) =>  {
                    querySnapshot.forEach(e => {
                        var data = e.data();
                        quotes.push(data);
                    });
        
            }).finally(()=> { 
                // console.log("Firebase Quotes : ")
                // console.log(quotes);
                setQuotes(quotes)
            })
        }catch(e){
            console.log(e);   
        }
    }

    //Loading Page will be invoked by the below function being called, loading state will continue till data updated to firebase or some error occurs
    const submitQuote = async () => {
        var updatedQuote = '';
        if(author === '')
            setAuthor('anonymous')
        
        if(quote === '')
            alert('Quote cannot be empty'); 
        else if(rating === 0)
            alert('Add a rating')
        else{
            if(quote[0] !== '"' || quote[quote.length-1] !== '"'){
                var temp = '"' + quote + '"';
                updatedQuote = '"' + quote + '"'
                await setQuote(temp);

            }
            

            checkForQuotes(updatedQuote)
        }
        
    }

    // function removeDuplicates(arr) {
    //     return arr.filter((item,
    //         index) => arr.indexOf(item) === index);
    // }


    const checkForQuotes = async (updatedQuote) => {
        var existsFlag = false;
        quotes.forEach((q) => {
            console.log(quote)
            console.log(q.quote)
            if(updatedQuote === q.quote){
                console.log("returning true")
                alert('Quote already exists');  
                existsFlag = true;  
            }
        });

        if(!existsFlag)
        alert('Quote does not exist')
        
    }

    // const toFirebase = async () => {
    //     setSubmitQuoteClicked(!submitQuoteClicked);
    //     try{
    //         await firebase.firestore().collection("quotes").add().then()
    //     //     await firebase.firestore().collection("quotes").set().then((querySnapshot) =>  {

    //     //     }).finally(()=> {
    //     //         setSubmitQuoteClicked(false);
    //     //         console.log(quotes);        
    //     //     })
    //     }catch(e){
    //             setSubmitQuoteClicked(false);
    //         console.log(e);
    //     }
    // }

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