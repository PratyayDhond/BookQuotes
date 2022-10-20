import React from 'react'
import './Quotes.css'
import QuoteCard from './QuoteCard'
import {userFavourites} from '../../App'
import Loading from '../FormComponents/Loading'
// userFavourites={userFavourites}

// function isQuoteFavourite(quote, userFavourites){
//     var flag = false;
//     userFavourites.forEach(element => {
//         if(element === quote.id){
//             flag = true;
//         }
//     });
// return flag;
// }

const Quotes = ({favouritesLoaded, setFavouritesLoaded, userID, viewableQuotes }) => {
    const quoteCards = [];
    viewableQuotes.forEach(q => {
        var heart = userFavourites.includes(q.id)
        quoteCards.push(
                <QuoteCard heart={heart} userID={userID} className={"cards"} quote={q} key={q.id}/>
            )
    });
    React.useEffect(() => {
        setFavouritesLoaded(true);
        //eslint-disable-next-line
    }, [])
    return(
        <>
                <div className='quoteBorder'>                    
                   { favouritesLoaded ?  quoteCards  : <Loading/> }
                </div>
        </>
    );
}

export default Quotes;
