import React from 'react'
import './SearchPageQuoteView.css'
import SearchPageQuoteCard from './SearchPageQuoteCards'
// import update from '../methods/updateViewCard'


function isQuoteFavourite(userFavourites, quote){
    var flag = false;
    // console.log(userFavourites);
    userFavourites.forEach(element => {
        // console.log(element);
        // console.log(quote.id);
        if(element === quote.id){
            // console.log(element + console.log(quote.id));
            // console.log("True")
            flag = true;
        }
    });
return flag;
}

const SearchPageViewQuoteCardHooks = ({quote, userFavourites, searchQuery, setViewableQuotes, setSearchQuery, userID}) => {
    const [viewQuoteCard, setViewQuoteCard] = React.useState(false);
    const [isFavourite, setIsFavourite] = React.useState(isQuoteFavourite(userFavourites, quote));
    const [editQuote, setEditQuote] = React.useState(false);
    const [deleteQuote, setDeleteQuote] = React.useState(false);
    const [confirmDelete, setConfirmDelete] = React.useState(false);

    React.useEffect(()=>{
    }, [viewQuoteCard])
    return(
        <>
            <div>
                <SearchPageQuoteCard userID={userID} deleteQuote={deleteQuote} setDeleteQuote={setDeleteQuote} confirmDelete={confirmDelete} setConfirmDelete={setConfirmDelete} searchQuery={searchQuery} setSearchQuery={setSearchQuery} setViewableQuotes={setViewableQuotes} editQuote={editQuote} setEditQuote={setEditQuote} quote={quote} viewQuoteCard={viewQuoteCard} setViewQuoteCard={setViewQuoteCard} isFavourite={isFavourite} setIsFavourite={setIsFavourite}/>            
            </div>
        </>
    )
}

export default SearchPageViewQuoteCardHooks;
