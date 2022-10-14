import React from 'react'
import './Quotes.css'
import QuoteCard from './QuoteCard'
import {userFavourites} from '../../App'
// userFavourites={userFavourites}

function isQuoteFavourite(quote){
    // var flag = false;
    userFavourites.forEach(element => {
        if(element === quote.id){
            return true;
        }
    });
return false;
}

const Quotes = ({ userID, viewableQuotes }) => {

    const quoteCards = [];
    viewableQuotes.forEach(q => {
        quoteCards.push(
                <QuoteCard heart={isQuoteFavourite(q)} userID={userID} className={"cards"} quote={q} key={q.id}/>
            )
});

    return(
        <>
                <div className='quoteBorder'>                    
                    { quoteCards }
                </div>
        </>
    );
}

export default Quotes;
