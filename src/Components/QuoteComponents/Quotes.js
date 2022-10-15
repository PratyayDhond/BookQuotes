import React from 'react'
import './Quotes.css'
import QuoteCard from './QuoteCard'
import {userFavourites} from '../../App'
// userFavourites={userFavourites}

function isQuoteFavourite(quote, userFavourites){
    var flag = false;
    userFavourites.forEach(element => {
        if(element === quote.id){
            console.log(quote.id + "->" + element)
            flag = true;
        }
    });
return flag;
}

const Quotes = ({ userID, viewableQuotes }) => {
    const quoteCards = [];
    console.log(viewableQuotes);
    viewableQuotes.forEach(q => {
        var heart = isQuoteFavourite(q, userFavourites);
        quoteCards.push(
                <QuoteCard heart={heart} userID={userID} className={"cards"} quote={q} key={q.id}/>
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
