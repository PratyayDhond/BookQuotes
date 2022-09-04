import React from 'react';
import './QuoteFullPageCard.css'
import Check from '../../elements/heartChecked.png'
import UnCheck from '../../elements/heartUnchecked.png'
import BackArrow from '../../elements/backArrow.png'
import getTime from '../methods/getTime';
const QuoteFullPageCard = ({setViewCard,quote, isFavourite, setIsFavourite}) => {
    console.log(quote);
    var time = getTime(quote.time);
    var source = quote.source;
    if(source.length !== 0)
        source = "(" + source + ")";
    // var time = new Date(Date.now());


    return(
        <>
            <div className='QuoteFullPageCard-TransparentFullSizeBackground'>
                <div className='QuoteFullPageCard-Size'>
                    <img src={BackArrow} alt="Go Back" onClick={() => {setViewCard(false)}} draggable="false" className='QuoteFullPageCard-BackArrow'/> 

                    <div className='QuoteFullPageCard-TimeStamp'>
                        upload time: {time.hour}:{time.minute}, {time.day}-{time.month}-{time.year}
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
                            <img src={Check} className="heart" alt="Checked" onClick={() => {setIsFavourite(false); console.log('check')}}/> :
                            <img src={UnCheck} className="heart" alt="UnChecked" onClick={() => {setIsFavourite(true); console.log('Uncheck')}}/>
                        }
                    </div>
                </div>
            </div>

        </>
    );
}

export default QuoteFullPageCard;