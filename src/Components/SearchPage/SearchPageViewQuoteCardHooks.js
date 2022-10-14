import React from 'react'
import './SearchPageQuoteView.css'
import SearchPageQuoteCard from './SearchPageQuoteCards'
import { userFavourites } from '../../App'; 

function isQuoteFavourite(quote){
    var flag = false;
    userFavourites.forEach(element => {
        if(element === quote.id){
            flag = true;
        }
    });
return flag;
}

const SearchPageViewQuoteCardHooks = ({quote, searchQuery, setSearchQuery, userID}) => {
    const [viewQuoteCard, setViewQuoteCard] = React.useState(false);
    const [isFavourite, setIsFavourite] = React.useState(isQuoteFavourite(quote));
    const [editQuote, setEditQuote] = React.useState(false);
    const [deleteQuote, setDeleteQuote] = React.useState(false);
    const [confirmDelete, setConfirmDelete] = React.useState(false);

    return(
        <>
            <div>
                <SearchPageQuoteCard userID={userID} deleteQuote={deleteQuote} setDeleteQuote={setDeleteQuote} confirmDelete={confirmDelete} setConfirmDelete={setConfirmDelete} searchQuery={searchQuery} setSearchQuery={setSearchQuery} editQuote={editQuote} setEditQuote={setEditQuote} quote={quote} viewQuoteCard={viewQuoteCard} setViewQuoteCard={setViewQuoteCard} isFavourite={isFavourite} setIsFavourite={setIsFavourite}/>            
            </div>
        </>
    )
}

export default SearchPageViewQuoteCardHooks;
