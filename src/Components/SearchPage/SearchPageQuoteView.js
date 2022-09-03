import React from "react";
import SearchPageQuoteCard from "./SearchPageQuoteCards";
const SearchPageQuoteView = ({quotes}) => {
    console.log(quotes);
    var QuoteComponents = [];
    for(let i = 0; i < quotes.length; i++){
        QuoteComponents.push(<SearchPageQuoteCard quote={quotes[i]} key={i}/>)
    }


    return(
        <>
            {
                quotes.length === 0 ? 
                <div></div> :
                <div>
                    {QuoteComponents}
                </div> 
            }
        </>
    );
    
}

export default SearchPageQuoteView;