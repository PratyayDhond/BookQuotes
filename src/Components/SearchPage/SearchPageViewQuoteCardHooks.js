import React from 'react'
import './SearchPageQuoteView.css'
import SearchPageQuoteCard from './SearchPageQuoteCards'
import update from '../methods/updateViewCard'
const SearchPageViewQuoteCardHooks = ({quote}) => {
    const [viewQuoteCard, setViewQuoteCard] = React.useState(false);
    const [isFavourite, setIsFavourite] = React.useState(quote.isFavourite);
    const [editQuote, setEditQuote] = React.useState(false);
    React.useEffect(()=>{
        update(quote.id, isFavourite);

    },[isFavourite, quote.id]);

    React.useEffect(()=>{
        console.log("ViewQuoteCard updated to " + viewQuoteCard);
    }, [viewQuoteCard])
    return(
        <>
            <div>
                <SearchPageQuoteCard editQuote={editQuote} setEditQuote={setEditQuote} quote={quote} viewQuoteCard={viewQuoteCard} setViewQuoteCard={setViewQuoteCard} isFavourite={isFavourite} setIsFavourite={setIsFavourite}/>            
            </div>
        </>
    )
}

export default SearchPageViewQuoteCardHooks;
