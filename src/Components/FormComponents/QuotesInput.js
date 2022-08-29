import React from 'react'
import Rating from './Rating';
import MenuBar from './MenuBar';


const QuotesInput = ({quote,setQuote,author,setAuthor, rating, setRating, submitQuote, submitQuoteClicked, setSubmitQuoteClicked}) => {    
    return(
        <div className='FormArea'>
            <MenuBar />
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
    </div>
    );
}

export default QuotesInput;