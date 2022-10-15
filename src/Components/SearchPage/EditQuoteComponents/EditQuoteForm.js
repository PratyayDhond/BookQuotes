import React from 'react'
import Rating from '../../FormComponents/Rating';
import './EditQuoteForm.css'

const EditQuotesInput = ({setViewQuoteCard, searchQuery ,setSearchQuery, setViewableQuotes,setEditQuote, updateQuote ,originalQuote, quote,setQuote,author,setAuthor, rating, setRating, submitQuote, source, setSource, updateTime, setUpdateTime,}) => {
    return(
       <div className='EditQuotesInput-FormArea'>  
        <div className='EditQuotesInput-QuoteForm'>


            <div className='EditQuotesInput-addAQuote' >Edit Quote!</div>

            <div className='EditQuotesInput-quoteDiv'> 
                <label htmlFor="EditQuotesInput-quoteInput" className='EditQuotesInput-quoteLabel'>Quote: </label><br />
                <input type="text" value={quote} onChange={(e) => {setQuote(e.target.value)}} height='3' className='EditQuotesInput-quoteInput' placeholder='Quote...' />
            </div>

            <div className='EditQuotesInput-authorDiv'>
                <label htmlFor="EditQuotesInput-author" className='EditQuotesInput-authorLabel'>Author: </label><br />
                <input type="text" value={author} onChange={(e)=>{setAuthor(e.target.value)}} className='EditQuotesInput-authorInput' placeholder='Author.. Anonymous if left empty' />
            </div>

            <div className='EditQuotesInput-sourceDiv'>
                <label htmlFor="EditQuotesInput-source" className='EditQuotesInput-sourceLabel'>Source:</label><br />
                <input type="text" value={source} onChange={(e)=>{setSource(e.target.value)}} className='EditQuotesInput-sourceInput' placeholder='How did you come across this Quote?' />

            </div>
            

            <Rating rating={rating} setRating={setRating} />

            <div className='EditQuotesInput-submitButton'>
                <input  className='EditQuotesInput-submitButtonInputField' type='submit' name="submit" value="Update Quote" onClick={() => {updateQuote( originalQuote,quote,author,rating,source,setEditQuote, setSearchQuery, setViewQuoteCard)}}/>
            </div>

            

        </div>
    </div>
    );
}

export default EditQuotesInput;