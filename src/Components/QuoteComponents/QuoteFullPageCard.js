import React from 'react';
import './QuoteFullPageCard.css'
import BackArrow from '../../elements/backArrow.png'
import getTime from '../methods/getTime';

const QuoteFullPageCard = ({setViewCard,quote}) => {
    console.log(quote);
    var time = getTime(quote.time);
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

                    {/* <div className='colorDivs'></div>
                    <div className='colorDivs'></div>
                    <div className='colorDivs'></div> */}
                </div>
            </div>

        </>
    );
}

export default QuoteFullPageCard;