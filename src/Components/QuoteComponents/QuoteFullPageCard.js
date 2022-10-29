import React from 'react';
import './QuoteFullPageCard.css'
import Check from '../../elements/heartChecked.png'
import UnCheck from '../../elements/heartUnchecked.png'
import BackArrow from '../../elements/backArrow.png'
import getTime from '../methods/getTime';

const QuoteFullPageCard = ({setViewCard,update, quote, userID, isFavourite, setIsFavourite}) => {
    var time = getTime(quote.time);
    var source = quote.source;
    if(source.length !== 0)
        source = "(" + source + ")";
 
        

    return(
        <>
            <div className='QuoteFullPageCard-TransparentFullSizeBackground'>
                <div className='QuoteFullPageCard-Size'>
                    <img src={BackArrow} alt="Go Back" onClick={() => {setViewCard(false)}} draggable="false" className='QuoteFullPageCard-BackArrow'/> 

                    <div className='QuoteFullPageCard-TimeStamp'>
                    {time.day}{time.ordinals} {time.monthString}, {time.year}
                    </div>

                    <div className='QuoteFullPageCard-Quote'>
                    <span className='QuoteFullPageCard-DoubleQuotes'>“</span>
                        {quote.quote}
                    <span className='QuoteFullPageCard-DoubleQuotes'>”</span>
                    </div>

                    <div className='QuoteFullPageCard-Author'>
                        -{quote.author === "" ? "Anonymous" : quote.author}
                    </div>

                    <div className="SearchPageQuoteCardFullPageView-Source">
                        {source}
                    </div>

        
                    <div className='QuoteFullPageCard-favourite'>
                        {
                            isFavourite? 
                            <img src={Check} className="fullPageheart" alt="Checked" onClick={() => {setIsFavourite(false); update(quote.id, false, userID) }}/> :
                            <img src={UnCheck} className="fullPageheart" alt="UnChecked" onClick={() => {setIsFavourite(true) ; update(quote.id, true, userID)}}/>
                        }
                    </div>
                </div>
            </div>

        </>
    );
}

export default QuoteFullPageCard;