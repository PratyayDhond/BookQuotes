import React from 'react'
import './SearchPageQuoteView.css'
import SearchPageQuoteCardFullPageView from './SearchPageQuoteCardFullPageView';

const SearchPageQuoteCard = ({quote,viewQuoteCard,setViewQuoteCard, isFavourite, setIsFavourite, editQuote, setEditQuote}) => {

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
            
            {viewQuoteCard ? <SearchPageQuoteCardFullPageView quote={quote} editQuote={editQuote} setEditQuote={setEditQuote} setViewQuoteCard={setViewQuoteCard} isFavourite={isFavourite} setIsFavourite={setIsFavourite}/> : <div></div>}

        </>
    )
}




export default SearchPageQuoteCard;

