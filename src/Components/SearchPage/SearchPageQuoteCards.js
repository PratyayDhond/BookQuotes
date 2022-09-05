import React from 'react'
import './SearchPageQuoteView.css'
import SearchPageQuoteCardFullPageView from './SearchPageQuoteCardFullPageView';

const SearchPageQuoteCard = ({deleteQuote, setDeleteQuote, confirmDelete, setConfirmDelete, searchQuery, setSearchQuery, quote,viewQuoteCard,setViewQuoteCard, isFavourite, setIsFavourite, editQuote, setEditQuote, fetch, setViewableQuotes}) => {

    return(
        <>
            <div className='SearchPageQuoteCard-HoverView' onClick={()=> {setViewQuoteCard(true)}}>
                <div className='SearchPageQuoteCard-Card'>
                    <div className='SearchPageQuoteCard-Quote'>
                        “{quote.quote}”
                    </div>

                    <div className='SearchPageQuoteCard-Author'>
                        - {quote.author === "" ? "Anonymous" : quote.author}
                    </div>
                </div>
            </div>
            
            {viewQuoteCard ? <SearchPageQuoteCardFullPageView setViewQuoteCard={setViewQuoteCard} deleteQuote={deleteQuote} setDeleteQuote={setDeleteQuote} confirmDelete={confirmDelete} setConfirmDelete={setConfirmDelete} searchQuery={searchQuery} setSearchQuery={setSearchQuery} setViewableQuotes={setViewableQuotes} quote={quote} editQuote={editQuote} setEditQuote={setEditQuote}  isFavourite={isFavourite} setIsFavourite={setIsFavourite}/> : <div></div>}

        </>
    )
}




export default SearchPageQuoteCard;

