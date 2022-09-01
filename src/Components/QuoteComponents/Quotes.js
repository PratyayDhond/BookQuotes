import React from 'react'
import './Quotes.css'
import QuoteCard from './QuoteCard'
const Quotes = ({quotes}) => {
    console.log(quotes)
    const quoteCards = [];
    for(let i = 0; i < quotes.length; i++){
        quoteCards.push(<QuoteCard className={"cards"} quote={quotes[i]} key={i}  />);
    }

    return(
        <>
                <div className='quoteBorder'>
                    
                        {/* for(let index = 0; index < quotes.length; index++) {
                            let quote = quotes[index];
                            <QuoteCard quote={quote} />   
                        } */}
                    
                    {
                        quoteCards
                    }

                    {/* <QuoteCard /> */}
                </div>
        </>
    );
}

export default Quotes;
