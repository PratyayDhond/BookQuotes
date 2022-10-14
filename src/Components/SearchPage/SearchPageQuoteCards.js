import React from 'react'
import './SearchPageQuoteView.css'
import SearchPageQuoteCardFullPageView from './SearchPageQuoteCardFullPageView';

const SearchPageQuoteCard = ({userID, deleteQuote, setDeleteQuote, confirmDelete, setConfirmDelete, searchQuery, setSearchQuery, quote,viewQuoteCard,setViewQuoteCard, isFavourite, setIsFavourite, editQuote, setEditQuote,}) => {

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
            
            {viewQuoteCard ? <SearchPageQuoteCardFullPageView userID={userID} setViewQuoteCard={setViewQuoteCard} deleteQuote={deleteQuote} setDeleteQuote={setDeleteQuote} confirmDelete={confirmDelete} setConfirmDelete={setConfirmDelete} searchQuery={searchQuery} setSearchQuery={setSearchQuery} quote={quote} editQuote={editQuote} setEditQuote={setEditQuote}  isFavourite={isFavourite} setIsFavourite={setIsFavourite}/> : <div></div>}

        </>
    )
}




export default SearchPageQuoteCard;

