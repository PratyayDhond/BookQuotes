import './QuoteCard.css'
import Check from '../../elements/heartChecked.png'
import UnCheck from '../../elements/heartUnchecked.png'
import React from 'react';
import QuoteFullPageCard from './QuoteFullPageCard';
import getTime from  '../methods/getTime'
import update from '../methods/updateViewCard';

const QuoteCard = ({quote,userID}) => {
    const [viewCard, setViewCard] = React.useState(false);
    const[isFavourite, setIsFavourite] = React.useState(quote.isFavourite);

    var time = getTime(quote.time);

    return(
        <>
            <div className='quoteCard'>
                <div className='cardContent' onClick={()=>{ setViewCard(true)}}>

                    <div className='quote'>
                        {quote.quote}
                    </div>

                    <div className='author'>
                       - {quote.author === "" ? "Anonymous" : quote.author}

                    </div>

                </div>

                <div className='cardFooter'>
                    <div className='timeStamp'>
                     {time.hour}:{time.minute}, {time.day}-{time.month}-{time.year}
                    </div>

                    <div className='favourite'>
                        {
                            isFavourite? 
                            <img src={Check} className="heart" alt="Checked" onClick={() => {setIsFavourite(false); update(quote.id, false, userID); console.log('UnCheck');}}/> :
                            <img src={UnCheck} className="heart" alt="UnChecked" onClick={() => {setIsFavourite(true); update(quote.id, true, userID); console.log('Check')}}/>
                        }
                    </div>
                </div>
            </div>

            <div >
                { viewCard ? <QuoteFullPageCard setViewCard={setViewCard} quote={quote} userID={userID} update={update} isFavourite={isFavourite} setIsFavourite={setIsFavourite} /> : <div></div>}                          
            </div>
        </>
    );
}

export default QuoteCard;