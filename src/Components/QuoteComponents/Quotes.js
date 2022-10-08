import React from 'react'
import './Quotes.css'
import QuoteCard from './QuoteCard'

function isQuoteFavourite(userFavourites, quote){
    var flag = false;
    userFavourites.forEach(element => {
        if(element === quote.id){
            flag = true;
        }
    });
return flag;
}

const Quotes = ({userFavourites, userID, quotes}) => {

    const quoteCards = [];
    for(let i = 0; i < quotes.length; i++){
        quoteCards.push(
        <QuoteCard heart={isQuoteFavourite(userFavourites,quotes[i])} userID={userID} className={"cards"} quote={quotes[i]} key={i}  />
        );
    }

    return(
        <>
                <div className='quoteBorder'>                    
                    { quoteCards }
                </div>
        </>
    );
}

export default Quotes;
