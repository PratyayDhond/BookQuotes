import React from 'react'
import Rating from './Rating';
import MenuBar from './MenuBar';
import '../Form.css'
const QuotesInput = ({quote,setQuote,author,setAuthor, rating, setRating, submitQuote, source, setSource}) => { 
    return(
       <div className='FormArea'>  
            <MenuBar />
            <div className='QuoteForm'>


            <div className='addAQuote'>Add A Quote!</div>

            <div className='quoteDiv'> 
                <label htmlFor="quoteInput" className='quoteLabel'>Quote: </label><br />
                <input type="text" value={quote} onChange={(e) => {setQuote(e.target.value)}} height='3' className='quoteInput' placeholder='Quote...' />
            </div>

            <div className='authorDiv'>
                <label htmlFor="author" className='authorLabel'>Author: </label><br />
                <input type="text" value={author} onChange={(e)=>{setAuthor(e.target.value)}} className='authorInput' placeholder='Author.. Anonymous if left empty' />
            </div>

            <div className='sourceDiv'>
                <label htmlFor="source" className='sourceLabel'>Source:</label><br />
                <input type="text" value={source} onChange={(e)=>{setSource(e.target.value)}} className='sourceInput' placeholder='How did you come across this Quote?' />
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