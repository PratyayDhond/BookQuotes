import './QuoteCard.css'
import Check from '../../elements/heartChecked.png'
import UnCheck from '../../elements/heartUnchecked.png'
import React from 'react';
import QuoteFullPageCard from './QuoteFullPageCard';
import getTime from  '../methods/getTime'
import update from '../methods/updateViewCard';


/*
async function update(id, isFavourite) {
    var db = firebase.firestore();
    try{
    var data = [];
    await db.collection("quotes").doc(id).get().then((snapshot) => {
        data.push(snapshot.data());
        
    })
    
    db.collection("quotes").doc(id).set({
        quote: data[0].quote || "",
        author: data[0].author || "",
        time: data[0].time || 0, 
        source: data[0].source || "",
        isFavourite: isFavourite || false,
    }).then(()=>{

    })
    }catch(e){
        console.log(e);
    };
} 

*/
const QuoteCard = ({quote}) => {
    const [viewCard, setViewCard] = React.useState(false);
    // console.log(quote.quote);
    // console.log(quote.author);
    const[isFavourite, setIsFavourite] = React.useState(quote.isFavourite);
    
    React.useEffect(()=>{
        // console.log("In UseEffect" + quote.isFavourite)
        update(quote.id, isFavourite);

    },[isFavourite, quote.id]);
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
                            <img src={Check} className="heart" alt="Checked" onClick={() => {setIsFavourite(false); console.log('check')}}/> :
                            <img src={UnCheck} className="heart" alt="UnChecked" onClick={() => {setIsFavourite(true); console.log('Uncheck')}}/>
                        }
                    </div>
                </div>
            </div>

            <div >
                { viewCard ? <QuoteFullPageCard setViewCard={setViewCard} quote={quote} isFavourite={isFavourite} setIsFavourite={setIsFavourite} /> : <div></div>}                          
            </div>
        </>
    );
}

export default QuoteCard;