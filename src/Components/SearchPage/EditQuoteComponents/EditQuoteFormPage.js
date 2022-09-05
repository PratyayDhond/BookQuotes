import React from "react";
import './EditQuoteFormPage.css'
import EditQuotesInput from "./EditQuoteForm";



const EditQuoteFormPage = ({setViewQuoteCard,setEditQuote, searchQuery, setSearchQuery,  setViewableQuotes, originalQuote, quote, setQuote, author, setAuthor, source, setSource, time, rating, setRating, updateTime, setUpdateTime, updateQuote}) => {
    return(
        <>
            {/* <div className="EditQuote-FormArea">
                <div className="EditQuote-QuoteForm">
                    <div className='EditQuote-quoteDiv'> 
                        <label htmlFor="EditQuote-quoteInput" className='EditQuote-quoteLabel'>Quote: </label><br />
                        <input type="text" value={quote} onChange={(e) => {setQuote(e.target.value)}} height='3' className='EditQuote-quoteInput' placeholder='Quote...' />
                    </div>
                </div>
            </div> */}

            <EditQuotesInput setViewQuoteCard={setViewQuoteCard} searchQuery={searchQuery} setSearchQuery={setSearchQuery} setViewableQuotes={setViewableQuotes} setEditQuote={setEditQuote} updateQuote={updateQuote} originalQuote={originalQuote} quote={quote} setQuote={setQuote} rating={rating} setRating={setRating} author={author} setAuthor={setAuthor} source={source} setSource={setSource} time={time} updateTime={updateTime} setUpdateTime={setUpdateTime}/>
  
        </>
    )
}

export default EditQuoteFormPage;