import React from 'react'
import './SearchPageQuoteView.css'

const SearchPageQuoteCard = ({quote}) => {   
    return(
        <>
            <div className='SearchPageQuoteCard-HoverView' onClick={()=> {console.log("Hover has been clicked")}}>
                <div className='SearchPageQuoteCard-Card'>
                    <div className='SearchPageQuoteCard-Quote'>
                        “{quote.quote}”
                    </div>

                    <div className='SearchPageQuoteCard-Author'>
                        - {quote.author === "" ? "Anonymous" : quote.author}
                    </div>
                </div>
            </div>

        </>
    )
}

export default SearchPageQuoteCard;

