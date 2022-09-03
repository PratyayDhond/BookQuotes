import React from 'react'
import './Quotes.css'
import QuoteCard from './QuoteCard'
const Quotes = ({quotes}) => {
    // console.log(quotes)
    const quoteCards = [];
    for(let i = 0; i < quotes.length; i++){
        quoteCards.push(<QuoteCard className={"cards"} quote={quotes[i]} key={i}  />);
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
